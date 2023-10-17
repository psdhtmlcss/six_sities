import { NameSpace } from 'const';
import { City, Offers, State, CurrentOfferState } from 'types';

export const getIsLoadingOffers = (state: State): boolean => state[NameSpace.Offers].isLoadingOffers;
export const getCurrentCity = (state: State): City => state[NameSpace.Offers].city;
export const getOffersPlace = (state: State): Offers => state[NameSpace.Offers].cityOffers;
export const getSortOffers = (state: State): Offers => state[NameSpace.Offers].sortOffers;
export const getIsFetchingData = (state: State): boolean => state[NameSpace.Offers].isFetchingData;
export const getCurrentSort = (state: State): string => state[NameSpace.Offers].sort;
export const getOffers = (state: State): Offers => state[NameSpace.Offers].offers;
export const getHoveredOffer = (state: State): number | null => state[NameSpace.Offers].hoveredOffer;
export const getCurrentOffer = (state: State): CurrentOfferState => state[NameSpace.Offers].currentOffer;
export const getError = (state: State): null | string => state[NameSpace.Offers].error;
