import { call, put } from 'redux-saga/effects';
import { createAction } from '@reduxjs/toolkit';
import { loadingActions } from './common/loading';

export function createAsyncAction<I, S, F>(actionType: string) {
  return {
    index: createAction<I>(`${actionType}`),
    success: createAction<S>(`${actionType}/success`),
    failure: createAction<F>(`${actionType}/failure`),
  };
}

interface AsyncActionsType {
  index: any;
  success: any;
  failure: any;
}
export function callApi(actions: AsyncActionsType) {
  return function* asyncApi(api: any) {
    try {
      yield put(loadingActions.startLoading(actions.index.type));
      const response: unknown = yield call(api);
      yield put(actions.success(response));
      return response;
    } catch (e) {
      yield put(actions.failure(e));
      throw e;
    } finally {
      yield put(loadingActions.endLoading(actions.index.type));
    }
  };
}
