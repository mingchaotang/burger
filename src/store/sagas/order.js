import { put } from 'redux-saga/effects';

import axios from '../../axios-orders';
import * as actions from '../actions/index';

export function* purchaseBurgerSaga(action) {
  yield put(actions.purchaseBurgerStart());
  try {
    const response = yield axios.post(
      '/orders.json?auth=' + action.token,
      action.orderData
    );
    yield put(
      actions.purchaseBurgerSuccess(response.data.name, action.orderData)
    );
  } catch (e) {
    put(actions.purchaseBurgerFail(e));
  }
}

export function* fetchOrdersSaga(action) {
  put(actions.fetchOrdersStart());
  try {
    const queryParams =
      '?auth=' +
      action.token +
      '&orderBy="userId"&equalTo="' +
      action.userId +
      '"';
    const response = yield axios.get('/orders.json' + queryParams);
    const fetchedOrders = [];
    for (let key in response.data) {
      fetchedOrders.push({
        ...response.data[key],
        id: key
      });
    }
    yield put(actions.fetchOrdersSuccess(fetchedOrders));
  } catch (e) {
    yield put(actions.fetchOrdersFail(e));
  }
}

export function* deleteOrderSaga(action) {
  yield put(actions.deleteOrderStart());
  try {
    yield axios.delete(
      '/orders/' + action.orderId + '.json?auth=' + action.token
    );
    yield put(actions.deleteOrderSuccess(action.orderId));
  } catch (e) {
    yield put(actions.deleteOrderFail(e));
  }
}
