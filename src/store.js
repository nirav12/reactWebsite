import rootReducer from './reducers';
import thunk from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux'; 

export default function configureStore(initialState){
	const store = createStore(
		rootReducer,
		initialState,
		applyMiddleware(thunk)
	);

	return store;
}