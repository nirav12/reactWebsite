export function addUser(state='',action){
		switch(action.type){
			case 'SUBMIT_FORM':
				return action.name
			default:
				return state
		}
}

export function rowData(state=[] ,action){
		switch(action.type){
			case 'USER_FETCH_DATA_SUCCESS':
				return action.rowData
			default:
				return state
		}
}

export function userHasErrored(state = false, action) {
    switch (action.type) {
        case 'USER_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}

export function userIsLoading(state = false, action) {
    switch (action.type) {
        case 'USER_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}