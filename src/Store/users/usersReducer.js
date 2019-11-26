import { FETCH_USERS } from '../actionTypes';

const initialState = {
    all: []
}

export default (state = initialState, action) => {
  switch (action.type) {

    case FETCH_USERS:
      return { all: action.payload }

    default:
      return state
  }
}