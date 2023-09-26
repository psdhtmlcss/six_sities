import { cities, AuthorizationStatus } from 'const';
import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers, requireAuthorization, setError, setLoadingDataStatus } from './action';
import { Offers } from 'types';

type InitialState = {
  city: string;
  offers: Offers;
  isLoadingData: boolean;
  authorizationStatus: string;
  error: string | null;
}

const initalState: InitialState = {
  city: cities[0],
  offers: [],
  isLoadingData: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null
};


const reducer = createReducer(initalState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setLoadingDataStatus, (state, action) => {
      state.isLoadingData = action.payload;
    });
});

export { reducer };
