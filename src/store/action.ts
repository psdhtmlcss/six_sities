import { createAction } from '@reduxjs/toolkit';
import { Offers } from 'types';

export const changeCity = createAction('changeCity', (value: string) => (
  {
    payload: value
  }
));

export const loadOffers = createAction('loadOffers', (value: Offers) => (
  {
    payload: value
  }
));
