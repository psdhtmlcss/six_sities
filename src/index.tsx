import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const offerCount = 999;

root.render(
  <React.StrictMode>
    <App offerCount={offerCount} />
  </React.StrictMode>,
);
