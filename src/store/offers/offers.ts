import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from 'const';
import { OffersState, Offers, City } from 'types';
import { fetchOffersAction, fetchOfferAction, sendReviewAction } from 'store/api-actions';
import { CURRENT_CITY, sortItems } from 'const';

const initialState: OffersState = {
  city: CURRENT_CITY,
  cityOffers: [],
  sortOffers: [],
  offers: [],
  currentOffer: {
    offer: null,
    nearbyOffers: [],
    reviews: []
  },
  hoveredOffer: null,
  isLoadingOffers: false,
  isFetchingData: false,
  sort: sortItems[0],
  error: null,
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

export const offers = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    hoverOffer: (state, action: PayloadAction<number | null>) => {
      state.hoveredOffer = action.payload;
    },
    changeCity: (state, action: PayloadAction<City>) => {
      state.city = action.payload;
      state.cityOffers = state.offers.filter((offer) => offer.city.name === state.city.name);
      state.sortOffers = sortOffers(state.cityOffers, state.sort);
      state.sort = sortItems[0];
    },
    changeSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
      state.sortOffers = sortOffers(state.cityOffers, state.sort);
    },
    setError: (state, action: PayloadAction<null | string>) => {
      state.error = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isLoadingOffers = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.cityOffers = state.offers.filter((offer) => offer.city.name === state.city.name);
        state.sortOffers = state.cityOffers;
        state.isLoadingOffers = false;
      })
      .addCase(fetchOfferAction.pending, (state) => {
        state.isLoadingOffers = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.currentOffer.offer = action.payload[0];
        state.currentOffer.nearbyOffers = action.payload[1];
        state.currentOffer.reviews = action.payload[2];
        state.isLoadingOffers = false;
      })
      .addCase(sendReviewAction.pending, (state) => {
        state.isFetchingData = true;
      })
      .addCase(sendReviewAction.fulfilled, (state, action) => {
        state.currentOffer.reviews = action.payload;
        state.isFetchingData = false;
      });
  }
});

export const { hoverOffer, changeSort, changeCity, setError } = offers.actions;

