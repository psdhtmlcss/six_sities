import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components';
import { BrowserRouter } from 'react-router-dom';
import { offers as offersJson } from 'mock/offers';
import { Offers } from 'types';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const offers: Offers = offersJson;

const offerCount = 999;

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App offerCount={offerCount} offers={offers} />
    </BrowserRouter>
  </React.StrictMode>
);
