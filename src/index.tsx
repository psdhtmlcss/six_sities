import React from 'react';
import ReactDOM from 'react-dom/client';
import { App, ErrorMessage } from 'components';
import { Provider } from 'react-redux';
import { store } from 'store';
import { fetchOffersAction, checkAuthAction } from 'store/api-actions';
import { HistoryRouter } from 'components';
import { browserHistory } from 'services/browserHistory';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <ErrorMessage />
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
