import axios from "axios";
import {
  FETCH_ALL_REVIEWS,
  FETCH_ONE_REVIEW,
  ADD_ONE_REVIEW,
  REMOVE_ONE_REVIEW
} from "../actionTypes";

export const fetchAllReviews = () => async dispatch => {
  let response = await axios.get("http://localhost:8000/reviews");
  dispatch({
    type: FETCH_ALL_REVIEWS,
    payload: response.data
  });
};

export const fetchOneReview = id => async dispatch => {
  let response = await axios.get("http://localhost:8000/reviews" + `/${id}`);
  dispatch({
    type: FETCH_ONE_REVIEW,
    payload: response.data
  });
};

export const addOneReview = newReview => async dispatch => {
  let response = await axios.post("http://localhost:8000/reviews", newReview);
  dispatch({
    type: ADD_ONE_REVIEW,
    payload: response.data
  });
};
