import { createAction } from '@reduxjs/toolkit';
import { State } from 'types';

export const changeCity = createAction('changeCity', (value: State) => (
  {
    payload: value
  }
));
