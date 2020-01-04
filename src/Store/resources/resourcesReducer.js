import { GET_RESOURCES_PENDING, GET_RESOURCES_SUCCESS, GET_ONE_RESOURCES_FAILED, GET_ONE_RESOURCES_PENDING, GET_ONE_RESOURCES_SUCCESS, ADD_RESOURCES_PENDING, ADD_RESOURCES_SUCCESS, ADD_RESOURCES_FAILED, UPDATE_RESOURCES_PENDING, UPDATE_RESOURCES_SUCCESS, UPDATE_RESOURCES_FAILED, DELETE_RESOURCES_PENDING, DELETE_RESOURCES_SUCCESS, DELETE_RESOURCES_FAILED } from "./resourcesConstants";

// import { FETCH_RESOURCES } from '../actionTypes';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {

    case GET_RESOURCES_PENDING:
      return state;
    case GET_RESOURCES_SUCCESS:
      return action.payload;
    case GET_ONE_RESOURCES_FAILED:
      return action.payload;

    case GET_ONE_RESOURCES_PENDING:
      return state;
    case GET_ONE_RESOURCES_SUCCESS:
      return action.payload;
    case GET_ONE_RESOURCES_FAILED:
      return action.payload;

    case ADD_RESOURCES_PENDING:
      return state;
    case ADD_RESOURCES_SUCCESS:
      return [action.payload, ...state];
    case ADD_RESOURCES_FAILED:
      return action.payload;

    case UPDATE_RESOURCES_PENDING:
      return state;
    case UPDATE_RESOURCES_SUCCESS:
      return state.map(resource => resource.id === action.payload.id ? action.payload : resource);
    case UPDATE_RESOURCES_FAILED:
      return action.payload;

    case DELETE_RESOURCES_PENDING:
      return state;
    case DELETE_RESOURCES_SUCCESS:
      let newState = state.filter(resource => resource.id !== action.payload.id)
      return newState;
    case DELETE_RESOURCES_FAILED:
      return action.payload;

    default:
      return state
  }
}