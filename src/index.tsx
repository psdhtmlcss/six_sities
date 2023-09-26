import React from 'react';
import ReactDOM from 'react-dom/client';
import { App, ErrorMessage } from 'components';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store';
import { fetchOffersAction, checkAuthAction } from 'store/api-actions';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ErrorMessage />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
