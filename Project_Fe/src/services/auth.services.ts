import { unauthorizedRequest } from "./request"; 
import { ILoginInfo, ILoginResponse } from "@interfaces/auth"; 



const login = async (data: ILoginInfo): Promise<ILoginResponse> =>
  await unauthorizedRequest.post("/token", { ...data });


const refreshToken = async (id: string): Promise<ILoginResponse> =>
  await unauthorizedRequest.get(`/token${id}`);

const authServices = {
  login,
  refreshToken
};

export default authServices;
