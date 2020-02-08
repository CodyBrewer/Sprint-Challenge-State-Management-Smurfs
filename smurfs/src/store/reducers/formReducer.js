import { ON_INPUT_CHANGE, ADD_SMURF_SUCCESS } from "../actions/types";

const initialState = {
  name: "",
  age: 0,
  height: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ON_INPUT_CHANGE:
      return { ...state, [action.payload.name]: action.payload.value };
    case ADD_SMURF_SUCCESS: {
      return {
        name: "",
        age: 0,
        height: 0
      };
    }
    default:
      return state;
  }
};
