import {
  GET_PRODUCTS,
  ERROR,
  DELETE_PRODUCT,
  SET_CURRENT,
  CLEAR_CURRENT,
  CREATE_ORDER,
  UPDATE_PRODUCT,
  GET_USER,
  LOGOUT_USER
} from "../actions/types";
const initialState = {
  products: null,
  loading: true,
  error: null,
  current: null,
  user: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
        loading: false
      };
    case CREATE_ORDER:
      return {
        ...state,
        products: [action.payload, ...state.products],
        loading: false
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          product => product._id != action.payload
        ),
        loading: false
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map(
          product =>
            product._id == action.payload.id ? action.payload : product
        ),
        loading: false
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
        loading: false
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
        loading: false
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
