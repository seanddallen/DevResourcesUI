import { FETCH_RESOURCES } from '../actionTypes';

const initialState = {
    all: []
}

export default (state = initialState, action) => {
  switch (action.type) {

    case FETCH_RESOURCES:
      return { all: action.payload }

    default:
      return state
  }
}