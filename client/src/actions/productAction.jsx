import axios from "axios";
import { setAlert } from "./alertAction";

import {
  GET_PRODUCTS,
  DELETE_PRODUCT,
  ERROR,
  SET_CURRENT,
  CLEAR_CURRENT,
  CREATE_ORDER,
  UPDATE_PRODUCT,
  GET_USER,
  LOGOUT_USER
} from "./types";

//get all products
export const getProducts = () => {
  return async dispatch => {
    try {
      const res = await axios.get("/api/products");
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: ERROR,
        payload: err.response.data.msg
      });
    }
  };
};

//add product

export const addProduct = ({
  id,
  customer_name,
  customer_email,
  product,
  quantity,
  history
}) => {
  return async dispatch => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };

      const body = JSON.stringify({
        id,
        customer_name,
        customer_email,
        product,
        quantity
      });
      const res = await axios.post("/api/products", body, config);
      dispatch({
        type: CREATE_ORDER,
        payload: res.data
      });
      history.push("/home");
      dispatch(setAlert("succcessfully created your order", "success"));
    } catch (err) {
      dispatch({
        type: ERROR,
        payload: err.response.data.msg
      });
    }
  };
};

//SET CURRENT
export const setCurrent = product => {
  return dispatch => {
    dispatch({
      type: SET_CURRENT,
      payload: product
    });
  };
};

//clear CURRENT
export const clearCurrent = () => {
  return dispatch => {
    dispatch({
      type: CLEAR_CURRENT
    });
  };
};

//update product
export const updateProduct = (product, history) => {
  return async dispatch => {
    try {
      dispatch({
        type: UPDATE_PRODUCT,
        payload: product
      });
      history.push("/home");
      dispatch(setAlert("succcessfully updated your order", "success"));
    } catch (err) {
      dispatch({
        type: ERROR,
        payload: err.response.data.msg
      });
    }
  };
};

//DELETE PRODUCT
export const deleteProduct = id => {
  return async dispatch => {
    try {
      const res = await axios.delete("/api/products/" + id);
      dispatch({
        type: DELETE_PRODUCT,
        payload: id
      });
      dispatch(setAlert("successfully deleted  ", "success"));
    } catch (err) {
      dispatch({
        type: ERROR,
        payload: err.response.data.msg
      });
    }
  };
};

//login user
export const getUser = () => {
  return async dispatch => {
    try {
      const res = await axios.get("/api/current_user");
      dispatch({
        type: GET_USER,
        payload: res.data
      });
      //  dispatch(setAlert("successfully deleted  ", "success"));
    } catch (err) {
      dispatch({
        type: ERROR
      });
    }
  };
};

//logout user

export const logoutUser = () => {
  return async dispatch => {
    try {
      const res = await axios.get("/api/logout");
      dispatch({
        type: LOGOUT_USER
      });
      dispatch(setAlert("successfully Logged out", "success"));
    } catch (err) {
      dispatch({
        type: ERROR
      });
    }
  };
};
