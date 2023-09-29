import { AuthorizationStatus, CURRENT_CITY } from 'const';
import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers, requireAuthorization, setError, setLoadingDataStatus, setUserEmail } from './action';
import { Offers, City } from 'types';

type InitialState = {
  city: City;
  offers: Offers;
  isLoadingData: boolean;
  authorizationStatus: string;
  error: string | null;
  user: string | null;
}

const initalState: InitialState = {
  city: CURRENT_CITY,
  offers: [],
  isLoadingData: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  user: null
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
    })
    .addCase(setUserEmail, (state, action) => {
      state.user = action.payload;
    });
});

export { reducer };
