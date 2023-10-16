import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from 'const';
import { offers } from './offers/offers';
import { user } from './user/user';

export const rootReducer = combineReducers({
  [NameSpace.User]: user.reducer,
  [NameSpace.Offers]: offers.reducer
});
