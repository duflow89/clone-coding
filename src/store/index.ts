import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory } from 'history';
import { commonRootReducer } from './common';
import { clientRootReducer } from './client';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const historyStore = createBrowserHistory();

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: createBrowserHistory(),
});

export const rootReducer = combineReducers({
  router: routerReducer,
  common: commonRootReducer,
  client: clientRootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
  middleware: [routerMiddleware, sagaMiddleware],
});

export const history = createReduxHistory(store);

sagaMiddleware.run(rootSaga);

export default store;
