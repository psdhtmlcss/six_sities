import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const offerCount = 999;

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App offerCount={offerCount} />
    </BrowserRouter>
  </React.StrictMode>
);
