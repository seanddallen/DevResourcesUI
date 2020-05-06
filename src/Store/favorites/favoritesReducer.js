import { FETCH_ALL_FAVORITES, ADD_ONE_FAVORITE, REMOVE_ONE_FAVORITE } from "../actionTypes"

const initialState = []

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ALL_FAVORITES:
            return action.payload
        case ADD_ONE_FAVORITE:
            return [...state, action.payload]
        case REMOVE_ONE_FAVORITE:
            let newState = state.filter(favorite => favorite.id !== action.payload.id)
            return newState
        default:
            return state
    }
}