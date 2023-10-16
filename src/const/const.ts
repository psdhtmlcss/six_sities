export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';
export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
export const TIMEOUT_SHOW_ERROR = 2000;
export const CURRENT_CITY = {
  name: 'Paris',
  location: {
    latitude: 48.85661,
    longitude:2.351499,
    zoom: 13
  }
};

export const AppRoute = {
  Main: '/',
  Login: '/login',
  Offer: '/offer/',
  NotFound: '/*'
} as const;

export enum APIRoute {
  Offers = '/hotels',
  Offer = '/hotels/',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments/'
}

export enum AuthorizationStatus {
  Auth = 'auth',
  NoAuth = 'no_auth',
  Unknown = 'unknown'
}

export const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const sortItems = {
  0: 'Popular',
  1: 'Price: low to high',
  2: 'Price: high to low',
  3: 'Top rated first'
};

export enum NameSpace {
  User = 'USER',
  Offers = 'OFFERS'
}
