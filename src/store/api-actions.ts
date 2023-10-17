import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AppRoute } from 'const';
// import { APIRoute, TIMEOUT_SHOW_ERROR } from 'const';
import { AppDispatch, Offers, State, UserData, AuthData, Reviews, ReviewData, Offer } from 'types';
import { redirectToRoute } from './action';
// import { store } from 'store';
import { saveToken, dropToken } from 'services';

export const fetchOffersAction = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async(_arg, { dispatch, extra: api }) => {
    const {data} = await api.get<Offers>(APIRoute.Offers);
    return data;
  }
);

export const fetchOfferAction = createAsyncThunk<[Offer, Offers, Reviews], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async(offerId, { dispatch, extra: api }) => {
    const [offer, nearbyOffers, reviews] = await Promise.all([
      api.get<Offer>(`${APIRoute.Offer}${offerId}`),
      api.get<Offers>(`${APIRoute.Offer}${offerId}/nearby`),
      api.get<Reviews>(`${APIRoute.Reviews}${offerId}`)
    ]);
    return [offer.data, nearbyOffers.data, reviews.data];
  }
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<UserData>(APIRoute.Login);
    return data;
  }
);

// export const clearErrorAction = createAsyncThunk(
//   'clearError',
//   () => {
//     setTimeout(
//       () => store.dispatch(setError(null)),
//       TIMEOUT_SHOW_ERROR
//     );
//   }
// );

export const sendReviewAction = createAsyncThunk<Reviews, ReviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendReview',
  async (data, { dispatch, extra: api }) => {

    const result = await api.post<Reviews>(`${APIRoute.Reviews}${data.id}`, data.data);
    return result.data;
  }
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async (data, { dispatch, extra: api }) => {
    const result = await api.post<UserData>(APIRoute.Login, data);
    saveToken(result.data.token);
    dispatch(redirectToRoute(AppRoute.Main));
    return result.data;
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
    dispatch(redirectToRoute(AppRoute.Main));
  }
);
