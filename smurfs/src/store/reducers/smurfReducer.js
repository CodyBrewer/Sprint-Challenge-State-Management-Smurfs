import {
  FETCH_SMURFS,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE,
  ADD_SMURF,
  DELETE_SMURF
} from "../actions/types";

const initialState = {
  smurfs: [],
  isFetching: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS:
      return { ...state, isFetching: true, error: null };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        smurfs: action.payload,
        error: null
      };
    case FETCH_SMURFS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case ADD_SMURF:
      return {
        ...state,
        smurfs: action.payload
      };
    case DELETE_SMURF:
      return {
        ...state,
        smurfs: action.payload
      };
    default:
      return state;
  }
};
