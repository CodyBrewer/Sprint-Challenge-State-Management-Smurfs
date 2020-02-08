import { combineReducers } from "redux";
import smurfReducer from "../store/reducers/smurfReducer";

export default combineReducers({
  smurfs: smurfReducer
});
