import Constants from "./resourdceVotesConstants";
// import { FETCH_RESOURCES } from '../actionTypes';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_RESOURCEVOTES_PENDING:
      return state;
    case GET_RESOURCEVOTES_SUCCESS:
      return action.payload;
    case GET_RESOURCEVOTES_FAILED:
      return action.payload;

    case GET_ONE_RESOURCEVOTE_PENDING:
      return state;
    case GET_ONE_RESOURCEVOTE_SUCCESS:
      return action.payload;
    case GET_ONE_RESOURCEVOTE_FAILED:
      return action.payload;

    case ADD_RESOURCEVOTES_PENDING:
      return state;
    case ADD_RESOURCEVOTES_SUCCESS:
      return [action.payload, ...state];
    case ADD_RESOURCEVOTES_FAILED:
      return action.payload;

    case UPDATE_RESOURCEVOTE_PENDING:
      return state;
    case UPDATE_RESOURCEVOTE_SUCCESS:
      return state.map(votes =>
        votes.id === action.payload.id ? action.payload : votes
      );
    case UPDATE_RESOURCEVOTE_FAILED:
      return action.payload;

    case DELETE_RESOURCEVOTES_PENDING:
      return state;
    case DELETE_RESOURCEVOTES_SUCCESS:
      let newState = state.filter(votes => votes.id !== action.payload.id);
      return newState;
    case DELETE_RESOURCEVOTES_FAILED:
      return action.payload;

    default:
      return state;
  }
};
