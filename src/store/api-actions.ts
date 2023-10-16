import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, TIMEOUT_SHOW_ERROR, AppRoute } from 'const';
import { AppDispatch, Offers, State, UserData, AuthData, Reviews, ReviewData, Offer } from 'types';
import { setError, redirectToRoute } from './action';
import { store } from 'store';
import { saveToken, dropToken } from 'services';
import { setUserInfo } from './user/user';

export const fetchOffersAction = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async(_arg, { dispatch, extra: api }) => {
    // dispatch(setLoadingDataStatus(true));
    const {data} = await api.get<Offers>(APIRoute.Offers);
    return data;
    // dispatch(setLoadingDataStatus(false));
    // dispatch(loadOffers(data));
    // dispatch(setCityOffers());
  }
);

export const fetchOfferAction = createAsyncThunk<[Offer, Offers, Reviews], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async(offerId, { dispatch, extra: api }) => {
    // dispatch(setLoadingDataStatus(true));
    const [offer, nearbyOffers, reviews] = await Promise.all([
      api.get<Offer>(`${APIRoute.Offer}${offerId}`),
      api.get<Offers>(`${APIRoute.Offer}${offerId}/nearby`),
      api.get<Reviews>(`${APIRoute.Reviews}${offerId}`)
    ]);
    // dispatch(setLoadingDataStatus(false));
    // dispatch(loadOffer([offer.data, nearbyOffers.data, reviews.data]));
    return [offer.data, nearbyOffers.data, reviews.data];
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    // try {
    //   const { data } = await api.get<UserData>(APIRoute.Login);
    //   dispatch(requireAuthorization(AuthorizationStatus.Auth));
    //   dispatch(setUserEmail(data.email));
    // } catch {
    //   dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    // }
    const { data } = await api.get<UserData>(APIRoute.Login);
    dispatch(setUserInfo(data));
  }
);

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR
    );
  }
);

export const sendReviewAction = createAsyncThunk<Reviews, ReviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendReview',
  async (data, { dispatch, extra: api }) => {
    // dispatch(setFetchingDataStatus(true));
    const result = await api.post<Reviews>(`${APIRoute.Reviews}${data.id}`, data.data);
    // dispatch(setFetchingDataStatus(false));
    // dispatch(sendReview(result.data));
    return result.data;
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async (data, { dispatch, extra: api }) => {
    // dispatch(setFetchingDataStatus(true));
    const result = await api.post<UserData>(APIRoute.Login, data);
    // dispatch(setFetchingDataStatus(false));
    saveToken(result.data.token);
    // dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setUserInfo(result.data));
    dispatch(redirectToRoute(AppRoute.Main));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    // dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(setUserInfo(null));
  }
);
