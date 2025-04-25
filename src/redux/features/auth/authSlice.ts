import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

export type TUser = {
  email: string;
  // role: "user" | "admin";
  role: string;
  iat: number;
  exp: number;
};

type TAuthState = {
  user: null | TUser;
  token: null | string;
};

const initialState: TAuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // setUser: (state, { payload }: PayloadAction<TAuthState>) => {
    //   state.user = payload.user;
    //   state.token = payload.token;
    // },

    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export const selectUser = (state: RootState) => state.login.user;
export const selectToken = (state: RootState) => state.login.token;
export default authSlice.reducer;
