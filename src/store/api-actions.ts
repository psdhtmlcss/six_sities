import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR, AppRoute } from 'const';
import { AppDispatch, Offers, State, UserData, AuthData, Reviews, ReviewData, Offer } from 'types';
import { loadOffers, requireAuthorization, setError, setLoadingDataStatus, redirectToRoute, setUserEmail, loadOffer, sendReview, setCityOffers } from './action';
import { store } from 'store';
import { saveToken, dropToken } from 'services';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async(_arg, { dispatch, extra: api }) => {
    dispatch(setLoadingDataStatus(true));
    const {data} = await api.get<Offers>(APIRoute.Offers);
    dispatch(setLoadingDataStatus(false));
    dispatch(loadOffers(data));
    dispatch(setCityOffers());
  }
);

export const fetchOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async(offerId, { dispatch, extra: api }) => {
    dispatch(setLoadingDataStatus(true));
    const [offer, nearbyOffers, reviews] = await Promise.all([
      api.get<Offer>(`${APIRoute.Offer}${offerId}`),
      api.get<Offers>(`${APIRoute.Offer}${offerId}/nearby`),
      api.get<Reviews>(`${APIRoute.Reviews}${offerId}`)
    ]);
    dispatch(setLoadingDataStatus(false));
    dispatch(loadOffer([offer.data, nearbyOffers.data, reviews.data]));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<UserData>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setUserEmail(data.email));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
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

export const sendReviewAction = createAsyncThunk<void, ReviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendReview',
  async (data, { dispatch, extra: api }) => {
    const result = await api.post<Reviews>(`${APIRoute.Reviews}${data.id}`, data.data);
    dispatch(sendReview(result.data));
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async (data, { dispatch, extra: api }) => {
    const result = await api.post<UserData>(APIRoute.Login, data);
    saveToken(result.data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setUserEmail(result.data.email));
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
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(setUserEmail(null));
  }
);
