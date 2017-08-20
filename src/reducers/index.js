import {combineReducers} from 'redux';
import {addUser,rowData,userHasErrored,userIsLoading} from './RegFormReducers';

const allReducers = combineReducers({
	addUser,
	rowData,
	userHasErrored,
	userIsLoading
})

export default allReducers
