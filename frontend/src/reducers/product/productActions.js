
import {PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL} from "./productTypes";
import axios from "axios";

export const fetchProductsRequest = () => {
  return {
    type: PRODUCT_LIST_REQUEST,
  };
};

export const fetchProductsSuccess = (Products) => {
  return {
    type: PRODUCT_LIST_SUCCESS,
    payload: Products,
  };
};

export const fetchProductsFailure = (error) => {
  return {
    type: PRODUCT_LIST_FAIL,
    payload: error,
  };
};

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest());
    axios
      .get("/products")
      .then((response) => {
        // response.data is the products
        const Products = response.data;
        dispatch(fetchProductsSuccess(Products));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchProductsFailure(error.message));
      });
  };
};

export const fetchProductDetailsRequest = (productID) => {
  return {
    type: PRODUCT_DETAILS_REQUEST,
    payload: productID,
  };
};

export const fetchProductDetailsSuccess = (Product) => {
  return {
    type: PRODUCT_DETAILS_SUCCESS,
    payload: Product,
  };
};

export const fetchProductDetailsFailure = (error) => {
  return {
    type: PRODUCT_DETAILS_FAIL,
    payload: error,
  };
};

export const fetchProductDetails = (productID) => {
  return (dispatch) => {
    dispatch(fetchProductDetailsRequest(productID));
    axios
      .get(`/products/${productID}`)
      .then((response) => {
        // response.data is the products
        const Product = response.data;
        dispatch(fetchProductDetailsSuccess(Product));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchProductDetailsFailure(error.message));
      });
  };
};
