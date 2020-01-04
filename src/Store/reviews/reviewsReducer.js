import {
  FETCH_ALL_REVIEWS,
  FETCH_ONE_REVIEW,
  ADD_ONE_REVIEW,
  REMOVE_ONE_REVIEW
} from "../actionTypes";

const initialState = {
  all: [],
  one: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_REVIEWS:
      return {
        ...state,
        all: action.payload
      };

    case FETCH_ONE_REVIEW:
      return {
        ...state,
        one: action.payload
      };

    // case ADD_ONE_REVIEW:
    //   return {
    //     ...state,
    //     all: [action.payload, ...state.all]
    //   };

    // case REMOVE_ONE_REVIEW:
    //   return {
    //     ...state,
    //     all: state.all.filter(review => review.id !== action.payload.id)
    //   };

    default:
      return state;
  }
};
