import { createAction } from '@reduxjs/toolkit';
import { Offers, City, Reviews, Offer } from 'types';

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

export const hoverOffer = createAction('hoverOffer', (value: number | null) => (
  {
    payload: value
  }
));

export const setCityOffers = createAction('setCityOffers');

export const loadOffer = createAction('loadOffer', (value: [Offer, Offers, Reviews]) => (
  {
    payload: value
  }
));

export const requireAuthorization = createAction('user/requireAuthorization', (value: string) => (
  {
    payload: value
  }
));

export const sendReview = createAction('sendReview', (value: Reviews) => (
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

export const redirectToRoute = createAction('redirectToRoute', (value: string) => (
  {
    payload: value
  }
));

export const setUserEmail = createAction('setUserEmail', (value: string | null) => (
  {
    payload: value
  }
));

export const changeSort = createAction('changeSort', (value: string) => (
  {
    payload: value
  }
));
