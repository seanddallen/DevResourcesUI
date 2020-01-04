import { FETCH_ALL_USERS, FETCH_ONE_USER } from "../actionTypes";

const initialState = {
  all: [],
  one: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_USERS:
      return { ...state, all: action.payload };

    case FETCH_ONE_USER:
      return {
        ...state,
        one: action.payload
      };
    default:
      return state;
  }
};
