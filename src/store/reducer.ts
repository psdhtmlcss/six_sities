import { AuthorizationStatus, CURRENT_CITY, sortItems } from 'const';
import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers, loadOffer, hoverOffer, requireAuthorization, setError, setLoadingDataStatus, setFetchingDataStatus, setUserEmail, sendReview, changeSort, setCityOffers } from './action';
import { Offers, City, Reviews, Offer } from 'types';

type InitialState = {
  city: City;
  cityOffers: Offers;
  sortOffers: Offers;
  offers: Offers;
  hoveredOffer: number | null;
  currentOffer: {
    offer: Offer | null;
    nearbyOffers: Offers;
    reviews: Reviews;
  };
  isLoadingData: boolean;
  isFetchingData: boolean;
  authorizationStatus: string;
  error: string | null;
  user: string | null;
  sort: string;
}

const initalState: InitialState = {
  city: CURRENT_CITY,
  cityOffers: [],
  sortOffers: [],
  offers: [],
  hoveredOffer: null,
  currentOffer: {
    offer: null,
    nearbyOffers: [],
    reviews: []
  },
  isLoadingData: false,
  isFetchingData: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  user: null,
  sort: sortItems[0]
};

const sortOffers = (offers: Offers, sortType: string) => {
  const sOffers = offers.slice();
  switch(sortType) {
    case sortItems[0]: return offers;
    case sortItems[1]: return sOffers.sort((a, b) => a.price - b.price);
    case sortItems[2]: return sOffers.sort((a, b) => b.price - a.price);
    case sortItems[3]: return sOffers.sort((a, b) => b.rating - a.rating);
    default: return offers;
  }
};

const reducer = createReducer(initalState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setCityOffers, (state) => {
      state.cityOffers = state.offers.filter((offer) => offer.city.name === state.city.name);
      state.sortOffers = state.cityOffers;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.currentOffer.offer = action.payload[0];
      state.currentOffer.nearbyOffers = action.payload[1];
      state.currentOffer.reviews = action.payload[2];
    })
    .addCase(hoverOffer, (state, action) => {
      state.hoveredOffer = action.payload;
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
    .addCase(setFetchingDataStatus, (state, action) => {
      state.isFetchingData = action.payload;
    })
    .addCase(setUserEmail, (state, action) => {
      state.user = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.sort = action.payload;
      state.sortOffers = sortOffers(state.cityOffers, state.sort);
    });
});

export { reducer };
