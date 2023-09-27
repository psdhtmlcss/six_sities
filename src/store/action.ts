import { createAction } from '@reduxjs/toolkit';
import { Offers, City } from 'types';

export const changeCity = createAction('changeCity', (value: City) => (
  {
    payload: value
  }
));

export const loadOffers = createAction('loadOffers', (value: Offers) => (
  {
    payload: value
  }
));

export const requireAuthorization = createAction('user/requireAuthorization', (value: string) => (
  {
    payload: value
  }
));

export const setError = createAction('setError', (value: string | null) => (
  {
    payload: value
  }
));

export const setLoadingDataStatus = createAction('setLoadingDataStatus', (value: boolean) => (
  {
    payload: value
  }
));
