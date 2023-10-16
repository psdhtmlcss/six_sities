import { AuthorizationStatus } from 'const';
import { Offers, Offer, City } from './offers';
import { Reviews } from './reviews';

export type UserInfo = {
  email: string;
}

export type UserState = {
  authorizationStatus: AuthorizationStatus;
  userInfo: null | UserInfo;
  isFetchingData: boolean;
};

export type CurrentOfferState = {
  offer: Offer | null;
  nearbyOffers: Offers;
  reviews: Reviews;
};

export type OffersState = {
  city: City;
  cityOffers: Offers;
  sortOffers: Offers;
  offers: Offers;
  currentOffer: CurrentOfferState;
  hoveredOffer: number | null;
  isLoadingOffers: boolean;
  isFetchingData: boolean;
  sort: string;
  error: null | string;
}
