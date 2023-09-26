import { cities } from 'const';
import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers } from './action';
import { Offers } from 'types';

type InitialState = {
  city: string;
  offers: Offers;
}

const initalState: InitialState = {
  city: cities[0],
  offers: []
};


const reducer = createReducer(initalState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export { reducer };
