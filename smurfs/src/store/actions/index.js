import axios from "axios";
import {
  FETCH_SMURFS,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE
} from "./types";

const apiURL = "";

export const fetchSmurfs = () => dispatch => {
  console.log(`hello world`);
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
