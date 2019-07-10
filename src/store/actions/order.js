import * as actionTypes from '../actions/actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, orders) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orders
  };
};

export const purchaseBurgerFail = error => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START
  };
};

export const purchaseBurger = orderData => {
  return dispatch => {
    dispatch(purchaseBurgerStart());
    axios
      .post('/orders.json', orderData)
      .then(response => {
        dispatch(purchaseBurgerSuccess(response.data.name, orderData));
      })
      .catch(error => {
        dispatch(purchaseBurgerFail(error));
      });
  };
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  };
};

export const fetchOrdersSuccess = orders => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders
  };
};

export const fetchOrdersFail = error => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error
  };
};

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START
  };
};

export const fetchOrders = orderData => {
  return dispatch => {
    dispatch(fetchOrdersStart());
    axios
      .get('/orders.json')
      .then(res => {
        let fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key
          });
        }
        dispatch(fetchOrdersSuccess(fetchedOrders));
      })
      .catch(err => {
        dispatch(fetchOrdersFail(err));
      });
  };
};

export const deleteOrderSuccess = id => {
  return {
    type: actionTypes.DELETE_ORDERS_SUCCESS,
    deletedOrderId: id
  };
};

export const deleteOrderFail = error => {
  return {
    type: actionTypes.DELETE_ORDERS_FAIL,
    error: error
  };
};

export const deleteOrderStart = () => {
  return {
    type: actionTypes.DELETE_ORDERS_START
  };
};

export const deleteOrder = orderId => {
  return dispatch => {
    dispatch(deleteOrderStart());
    axios
      .delete('/orders/' + orderId + '.json')
      .then(response => {
        dispatch(deleteOrderSuccess(orderId));
      })
      .catch(error => {
        dispatch(deleteOrderFail(error));
      });
  };
};
