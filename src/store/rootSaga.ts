import { all } from 'redux-saga/effects';
import { clientRootSaga } from './client';

export default function* rootSaga() {
  yield all([...clientRootSaga]);
}
