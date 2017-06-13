export default function AddUser(state='',action){
		switch(action.type){
			case 'SUBMIT_FORM':
				return action.name
			default:
				return state
		}
}