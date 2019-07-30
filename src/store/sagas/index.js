import { takeEvery } from 'redux-saga/effects';

import { authLogoutSaga } from './auth';
import * as actionTypes from '../actions/actionTypes';

export function* watchAuth() {
  yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, authLogoutSaga);
}
