import { put, delay, call } from 'redux-saga/effects';
import * as actions from '../actions/index';
import axios from 'axios';

export function* authLogoutSaga() {
  yield call([localStorage, 'removeItem'], 'token');
  yield call([localStorage, 'removeItem'], 'userId');
  yield call([localStorage, 'removeItem'], 'expirationDate');
  yield put(actions.authLogoutSuccess());
}

export function* checkAuthTimeoutSaga(action) {
  yield delay(action.expirationTime * 1000);
  yield put(actions.authLogout());
}

export function* authUserSaga(action) {
  yield put(actions.authStart());
  const authData = {
    email: action.email,
    password: action.password,
    returnSecureToken: true
  };
  let url =
    'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCBBiKq6SgtD8eI9VbdH4jtlIx52Fz4984';
  if (!action.isSignup) {
    url =
      'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCBBiKq6SgtD8eI9VbdH4jtlIx52Fz4984';
  }
  try {
    const response = yield axios.post(url, authData);
    const expirationDate = yield new Date(
      new Date().getTime() + response.data.expiresIn * 1000
    );
    yield localStorage.setItem('token', response.data.idToken);
    yield localStorage.setItem('userId', response.data.localId);
    yield localStorage.setItem('expirationDate', expirationDate);
    yield put(
      actions.authSuccess(response.data.idToken, response.data.localId)
    );
    yield put(actions.checkAuthTimeout(response.data.expiresIn));
  } catch (error) {
    yield put(actions.authFail(error.response.data.error.message));
  }
}

export function* authCheckStateSaga() {
  const token = yield localStorage.getItem('token');
  if (!token) {
    yield put(actions.authLogout());
  } else {
    const userId = yield localStorage.getItem('userId');
    const expirationDate = yield localStorage.getItem('expirationDate');
    if (new Date() >= expirationDate) {
      yield put(actions.authLogout());
    } else {
      yield put(actions.authSuccess(token, userId));
      yield put(
        actions.checkAuthTimeout(
          (new Date(expirationDate).getTime() - new Date().getTime()) / 1000
        )
      );
    }
  }
}
