import { offers as offersJson } from 'mock/offers';
import { createReducer } from '@reduxjs/toolkit';
import { changeCity } from './action';

const initalState = {
  city: 'Amsterdam',
  offers: offersJson
};


const reducer = createReducer(initalState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
      state.offers = action.payload.offers;
    });
});

export { reducer };
