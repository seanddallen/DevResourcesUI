import * as types from "./resourceVotesConstants";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_RESOURCEVOTES_PENDING:
      return state;
    case types.GET_RESOURCEVOTES_SUCCESS:
      return action.payload;
    case types.GET_RESOURCEVOTES_FAILED:
      return action.payload;

    case types.GET_ONE_RESOURCEVOTE_PENDING:
      return state;
    case types.GET_ONE_RESOURCEVOTE_SUCCESS:
      return action.payload;
    case types.GET_ONE_RESOURCEVOTE_FAILED:
      return action.payload;

    case types.ADD_RESOURCEVOTES_PENDING:
      return state;
    case types.ADD_RESOURCEVOTES_SUCCESS:
      return [action.payload, ...state];
    case types.ADD_RESOURCEVOTES_FAILED:
      return action.payload;

    case types.UPDATE_RESOURCEVOTE_PENDING:
      return state;
    case types.UPDATE_RESOURCEVOTE_SUCCESS:
      return state.map(votes =>
        votes.id === action.payload.id ? action.payload : votes
      );
    case types.UPDATE_RESOURCEVOTE_FAILED:
      return action.payload;

    case types.DELETE_RESOURCEVOTES_PENDING:
      return state;
    case types.DELETE_RESOURCEVOTES_SUCCESS:
      let newState = state.filter(votes => votes.id !== action.payload.id);
      return newState;
    case types.DELETE_RESOURCEVOTES_FAILED:
      return action.payload;

    default:
      return state;
  }
};
