import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import usersReducer from './users/usersReducer'
import resourcesReducer from './resources/resourcesReducer'
// import reviewsReducer from './reducers/reviewsReducer'
// import commentsReducer from './reducers/commentsReducer'
// import votesReducer from './reducers/votesReducer'
// import favoritesReducer from './reducers/favoritesReducer'
// import drawersReducer from './reducers/drawersReducer'


const rootReducer = combineReducers({
  users: usersReducer,
  resources: resourcesReducer,
//   reviews: reviewsReducer,
//   comments: commentsReducer,
//   votes: votesReducer,
//   favorites: favoritesReducer,
//   drawers: drawersReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk, logger];

export const store = createStore(
    rootReducer, 
    composeEnhancers(applyMiddleware(...middleware))
);
