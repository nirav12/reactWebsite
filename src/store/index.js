import React from 'react';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import allReducers from '../reducers/index';
import { hashHistory } from 'react-router';

const logger = createLogger({
		predicate: (getState,action) => process.env.NODE_ENV === 'development',
		collapsed: true,
  	level: 'info',
  	actionTransformer(action) {
	    if (!action.status || !action.type) {
	      return action;
	    }
	    return {...action, type: `${action.type}_${action.status}`};
	}
});

const createStoreWithMiddleware = compose(
	applyMiddleware(thunk,logger),
 typeof window === 'object' && window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

export function configureStore(initialState) {
  return createStoreWithMiddleware(allReducers, initialState);
}

export const store = window.store = configureStore();

export const dispatch = store.dispatch;

export const history = hashHistory;