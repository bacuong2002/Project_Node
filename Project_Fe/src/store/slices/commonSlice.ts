import { LIST_LANGUAGES, LIST_THEME } from "@constants/common";
import { createAction, createSlice } from "@reduxjs/toolkit";
import { Data } from "src/types/data";

export interface ICommonState {
  theme: Data.Theme;
}

const initialState: ICommonState = {
  theme: LIST_THEME[0]
};

export const storeCommonChangeTheme =
  createAction<Data.Theme>("common/changeTheme");
export const storeCommonChangeLang = createAction<Data.Language>(
  "common/changeLangague"
);

// call service in store

// export const getContactAction = createAsyncThunk('contact/getContact', async (_id: string) => {
//   try {
//     const response: any = await contactServices.get(_id);
//     return response?.data;
//   } catch (error: any) {
//     console.error(error.response);
//   }
// });

export const commonSlice = createSlice({
  initialState,
  name: "common",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(storeCommonChangeTheme, (state, { payload }) => {
      state.theme = payload;
    });

    // handle state when call service
    // .addCase(getContactAction.pending, (state) => {
    //   state.loading = true;
    // })
    // .addCase(getContactAction.fulfilled, (state, { payload }) => {
    //   state.loading = false;
    //   state.contactDetail = payload;
    // })
    // .addCase(getContactAction.rejected, (state) => {
    //   state.loading = false;
    //   state.error = true;
    // });
  }
});

export default commonSlice.reducer;
