import { combineReducers } from "redux";
import smurfReducer from "../store/reducers/smurfReducer";
import formReducer from "../store/reducers/formReducer";

export default combineReducers({
  smurfs: smurfReducer,
  formData: formReducer
});
