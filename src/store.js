import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import cars from 'modules/home/reducer';
import filters from 'modules/filters/reducer';
import details from 'modules/details/reducer';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));
const reducers = combineReducers({ cars, filters, details });
const store = createStore(reducers, enhancer);

export default store;
