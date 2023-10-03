import { AuthorizationStatus, CURRENT_CITY } from 'const';
import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers, loadOffer, requireAuthorization, setError, setLoadingDataStatus, setUserEmail, sendReview } from './action';
import { Offers, City, Reviews, Offer } from 'types';

type InitialState = {
  city: City;
  offers: Offers;
  currentOffer: {
    offer: Offer | null;
    nearbyOffers: Offers;
    reviews: Reviews;
  };
  isLoadingData: boolean;
  authorizationStatus: string;
  error: string | null;
  user: string | null;
}

const initalState: InitialState = {
  city: CURRENT_CITY,
  offers: [],
  currentOffer: {
    offer: null,
    nearbyOffers: [],
    reviews: []
  },
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
    .addCase(loadOffer, (state, action) => {
      state.currentOffer.offer = action.payload[0];
      state.currentOffer.nearbyOffers = action.payload[1];
      state.currentOffer.reviews = action.payload[2];
    })
    .addCase(sendReview, (state, action) => {
      state.currentOffer.reviews = action.payload;
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
