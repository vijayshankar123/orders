import { combineReducers } from "redux";
import alert from "./alertReducer";
import products from "./productReducer";

export default combineReducers({
  alert,
  products
});
