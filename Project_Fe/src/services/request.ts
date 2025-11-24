import axios, { Canceler, AxiosResponse } from "axios"; // import thư viện thực hiện các yêu cầu http
import jwtDecode from "jwt-decode"; //giải mã token JWT
import toast from "react-hot-toast";// hiển thị thông báo cho người dùng

import { API_BASE_URL } from "@constants/config";
import { paramsSerializer } from "@helpers/utils";
import { cookies } from "@helpers/cookies";
import authServices from "@services/auth.services";
import { ILoginResponse } from "@interfaces/auth";
import resources from "../__mock__/resources.json";

let cancel: Canceler;

const authorizedRequest = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  },
  cancelToken: new axios.CancelToken((c) => {
    if (cancel) cancel();
    cancel = c;
  })
});

const unauthorizedRequest = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

const mockRequest = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

authorizedRequest.interceptors.request.use(
  (axiosConfig) => {
    const accessToken = cookies.get("token");

    if (accessToken && axiosConfig.headers) {
      axiosConfig.headers.Authorization = `Bearer ${accessToken}`;
    }

    axiosConfig.paramsSerializer = (params: any) => paramsSerializer(params);

    return axiosConfig;
  },
  async (error) => await Promise.reject(error)
);

authorizedRequest.interceptors.response.use(
  (response: AxiosResponse<any>) => response.data,
  async (error) => {
    const originalRequest = error.config;
    const userId = cookies.get("id");

    if (
      error.response &&
      error.response.status === 401 &&
      error.config &&
      !error.config.__isRetryRequest &&
      userId
    ) {
      originalRequest._retry = true;

      const res: ILoginResponse = await authServices.refreshToken(userId);

      const decoded: any = jwtDecode(res.token);

      cookies.set("token", res.token, res.expieration);
      cookies.set("id", decoded.id, res.expieration);

      authorizedRequest.defaults.headers.common.Authorization = `Bearer ${res.token}`;
      originalRequest.headers.Authorization = `Bearer ${res.token}`;
      if (
        originalRequest.method === "post" ||
        originalRequest.method === "put" ||
        originalRequest.method === "patch"
      )
        originalRequest.data = JSON.parse(originalRequest.data);
      return await authorizedRequest(originalRequest);
    }
    if (
      error.response &&
      error.response.status >= 400 &&
      error.response.status <= 500
    ) {
      toast.error(error.response.data.message);
    }
    return await Promise.reject(error);
  }
);

unauthorizedRequest.interceptors.response.use(
  (response: AxiosResponse<any>) => response.data,

  async (error) => {
    if (
      error.response &&
      error.response.status >= 400 &&
      error.response.status <= 500
    ) {
      toast.error(error.response.data.message);
    }
    return await Promise.reject(error);
  }
);

mockRequest.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    return response.data;
  },

  async (error) => {
    if (
      error.response &&
      error.response.status >= 400 &&
      error.response.status <= 500
    ) {
      toast.error(error.response.data.message);
    }
    const endpoint: string = error.config.url
      .substring(1)
      .replaceAll("/", "_")
      .replaceAll("-", "_");

    if (endpoint.includes("search_resources")) return resources;
    return mockRes[endpoint];
  }
);

export { authorizedRequest, unauthorizedRequest, mockRequest };
