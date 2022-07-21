import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types/models/user-model";
import { FormLoginFields } from "../../components/forms/form-login";
import AuthService from "../../service/auth-service/auth-service";

interface initialStateAuth {
  isAuth: boolean;
  userData: IUser;
  isLoading: boolean;
}

const initialState: initialStateAuth = {
  isAuth: false,
  userData: {} as IUser,
  isLoading: false,
};

export const authSlice = createSlice({
  initialState: initialState,
  name: "auth",
  reducers: {
    login(state, action: PayloadAction<FormLoginFields>) {
      const dataForm = action.payload;
      const user: IUser = {
        id: Math.random(),
        login: dataForm.login,
        password: dataForm.password,
      };
      state.userData = user;
      state.isAuth = true;
      AuthService.setAuthDataInLocalStorage(user);
    },
    checkAuth(state) {
      const { isAuth, dataUser } = AuthService.getAuthDataInLocalStorage();
      if (isAuth) {
        state.userData = dataUser;
        state.isAuth = true;
      }
    },
    logout(state) {
      state.userData = {} as IUser;
      state.isAuth = false;
      AuthService.removeAuthDataInLocalStorage();
    },
  },
});

export const { login, logout, checkAuth } = authSlice.actions;
