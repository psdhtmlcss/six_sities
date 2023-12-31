import type { Reviews } from './reviews';

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type City = {
  name: string;
  location: Location;
}

type Host = {
  id: number;
  name: string;
  isPro: boolean;
  avatarUrl: string;
}

export type Offer = {
    city: City;
    previewImage: string;
    images: string[];
    title: string;
    isPremium: boolean;
    rating: number;
    type: string;
    bedrooms: number;
    maxAdults: number;
    price: number;
    goods: string[];
    host: Host;
    description: string;
    location: Location;
    id: number;
}

export type Offers = Offer[];

export type CurrentOffer = {
  offer: Offer;
  nearbyOffers: Offers;
  reviews: Reviews;
}
