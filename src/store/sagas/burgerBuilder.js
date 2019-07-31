import { put } from 'redux-saga/effects';

import axios from '../../axios-orders';
import * as actions from '../actions/index';

export function* initIngredientsSaga() {
  const response = yield axios.get(
    'https://react-my-burger-ming.firebaseio.com/ingredients.json'
  );
  try {
    yield put(actions.setIngredients(response.data));
  } catch (e) {
    yield put(actions.fetchIngredientsFailed());
  }
}
