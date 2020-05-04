import axios from "axios";
import { FETCH_ALL_USERS, FETCH_ONE_USER } from "../actionTypes";

export const fetchAllUsers = () => async dispatch => {
  let response = await axios.get("http://localhost:8000/users");
  dispatch({
    type: FETCH_ALL_USERS,
    payload: response.data
  });
};

export const fetchOneUser = id => async dispatch => {
  let response = await axios.get("http://localhost:8000/users" + `/${id}`);
  dispatch({
    type: FETCH_ONE_USER,
    payload: response.data
  });
};
