import { PayloadAction } from '@reduxjs/toolkit';
import { browserHistory } from 'services/browserHistory';
import { Middleware } from 'redux';
import { rootReducer } from 'store/root-reducer';

type Reducer = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === 'redirectToRoute') {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
