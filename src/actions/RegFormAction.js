import * as types from '../constants/types';

export function addUser(name){
	return {
		type:'SUBMIT_FORM',
		name
	};

}