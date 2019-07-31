import { put, delay } from 'redux-saga/effects';
import * as actions from '../actions/index';

export function* authLogoutSaga(action) {
  yield localStorage.removeItem('token');
  yield localStorage.removeItem('userId');
  yield localStorage.removeItem('expirationDate');
  yield put(actions.authLogoutSuccess());
}

export function* checkAuthTimeoutSaga(action) {
  yield delay(action.expirationTime*1000);
  yield put(actions.authLogout());
}