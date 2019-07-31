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

export const purchaseBurger = (orderData, token) => {
  return {
    type: actionTypes.PURCHASE_BURGER,
    orderData: orderData,
    token: token
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

export const fetchOrders = (token, userId) => {
  return {
    type: actionTypes.FETCH_ORDERS,
    token: token,
    userId: userId
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

export const deleteOrder = (orderId, token) => {
  return {
    type: actionTypes.DELETE_ORDER,
    orderId: orderId,
    token: token
  };
};
