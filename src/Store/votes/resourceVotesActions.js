import axios from "axios";
import * as types from "./resourceVotesConstants";
export const getAllResourceVotes = () => {
  return dispatch => {
    dispatch({
      type: types.GET_RESOURCEVOTES_PENDING
    });
    axios
      .get("http://localhost:8000/votes")
      .then(res => {
        dispatch({
          type: types.GET_RESOURCEVOTES_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: types.GET_RESOURCEVOTES_FAILED,
          payload: err
        });
      });
  };
};

export const getOneResourceVote = id => {
  return dispatch => {
    dispatch({
      type: types.GET_ONE_RESOURCEVOTE_PENDING
    });
    axios
      .get(`http://localhost:8000/votes/${id}`)
      .then(res => {
        dispatch({
          type: types.GET_ONE_RESOURCEVOTE_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: types.GET_ONE_RESOURCEVOTE_FAILED,
          payload: err
        });
      });
  };
};

export const addResourceVote = newVote => {
  return dispatch => {
    dispatch({
      type: types.ADD_RESOURCEVOTES_PENDING
    });
    axios
      .post(`http://localhost:8000/votes`, newVote)
      .then(res => {
        dispatch({
          type: types.ADD_RESOURCEVOTES_SUCCESS,
          payload: res.data[0]
        });
      })
      .catch(err => {
        dispatch({
          type: types.ADD_RESOURCEVOTES_FAILED,
          payload: err
        });
      });
  };
};

export const updateResourceVote = (updatedInfo, id) => {
  //this would be used if the user is changing from vote up to vote down
  return dispatch => {
    dispatch({
      type: types.UPDATE_RESOURCEVOTE_PENDING
    });
    axios
      .patch(`http://localhost:8000/votes/${id}`, updatedInfo)
      .then(res => {
        dispatch({
          type: types.UPDATE_RESOURCEVOTE_SUCCESS,
          payload: res.data[0]
        });
      })
      .catch(err => {
        dispatch({
          type: types.UPDATE_RESOURCEVOTE_FAILED,
          payload: err
        });
      });
  };
};

export const removeResourceVote = id => {
  return dispatch => {
    dispatch({
      type: types.DELETE_RESOURCEVOTES_PENDING
    });
    axios
      .delete(`http://localhost:8000/votes/${id}`)
      .then(res => {
        dispatch({
          type: types.DELETE_RESOURCEVOTES_SUCCESS,
          payload: res.data[0]
        });
      })
      .catch(err => {
        dispatch({
          type: types.DELETE_RESOURCEVOTES_FAILED,
          payload: err
        });
      });
  };
};
