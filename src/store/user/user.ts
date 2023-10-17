import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, AuthorizationStatus } from 'const';
import { checkAuthAction, loginAction, logoutAction } from 'store/api-actions';
import type { UserState } from 'types';

const initialState: UserState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userInfo: null,
  isFetchingData: false
};

export const user = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userInfo = { email: action.payload.email };
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.pending, (state) => {
        state.isFetchingData = true;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userInfo = { email: action.payload.email };
        state.isFetchingData = false;

      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.isFetchingData = false;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userInfo = null;
      });
  }
});
