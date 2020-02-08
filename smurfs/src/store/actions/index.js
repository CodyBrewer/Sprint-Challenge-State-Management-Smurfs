import axios from "axios";
import {
  FETCH_SMURFS,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE,
  ADD_SMURF,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE,
  ON_INPUT_CHANGE
} from "./types";

export const fetchSmurfs = () => dispatch => {
  dispatch({
    type: FETCH_SMURFS
  });
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data }))
    .catch(err => {
      dispatch({ type: FETCH_SMURFS_FAILURE, payload: err });
    });
};

export const addSmurf = ({ name, age, height }) => dispatch => {
  console.log(name, age, height);
  axios
    .post(`https://localhost:3333/smurfs`, { name, age, height })
    .then(res => {
      dispatch(addSmurfSuccess(res.data));
    })
    .catch(error =>
      dispatch({ type: ADD_SMURF_FAILURE, payload: error.message })
    );
};

export const addSmurfSuccess = data => {
  return {
    type: ADD_SMURF,
    payload: {
      name: data.name,
      age: data.age,
      height: data.height
    }
  };
};

export const changeInput = target => {
  return {
    type: ON_INPUT_CHANGE,
    payload: {
      name: target.name,
      value: target.value
    }
  };
};
