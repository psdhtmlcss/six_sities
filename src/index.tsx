import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components';
import { BrowserRouter } from 'react-router-dom';
import { offers as offersJson } from 'mock/offers';
import { cities } from 'mock/cities';
import { Offers } from 'types';
import { Provider } from 'react-redux';
import { store } from 'store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const offers: Offers = offersJson;

const offerCount = 999;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App offerCount={offerCount} offers={offers} cities={cities} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
