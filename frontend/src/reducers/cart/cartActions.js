import axios from "axios";
import Cookie from "js-cookie";
import { ADD_CART_REQUEST, ADD_CART_SUCCESS, ADD_CART_FAIL } from "./cartTypes";

export const addToCartRequest = (productID) => {
  return {
    type: ADD_CART_REQUEST,
    payload: productID,
  };
};

export const addToCartSuccess = (product,quantity) => {
  return {
    type: ADD_CART_SUCCESS,
    payload: {...product, quantity}
  };
};

export const addToCartFailure = (error) => {
  return {
    type: ADD_CART_FAIL,
    payload: error,
  };
};

export const addTocart = (productID, quantity) => {
  return (dispatch, getState) => {
    dispatch(addToCartRequest(productID));
    axios
      .get(`/products/${productID}`)
      .then((response) => {
        const product = response.data;
        dispatch(addToCartSuccess(product, quantity));
      })
      .catch((error) => {
        dispatch(addToCartFailure(error.message));
      });
  };
};
