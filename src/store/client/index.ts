import { combineReducers } from '@reduxjs/toolkit';
import { requestReducer, requestSaga } from './request';

export const clientRootReducer = combineReducers({
  request: requestReducer,
});

export const clientRootSaga = [...requestSaga];
