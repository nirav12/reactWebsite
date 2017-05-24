import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import * as RegFormComponent from "./components/RegFormComponent";
import * as RegFormReducers from "./reducers/RegFormReducers"; 

const store = createStore(RegFormReducers.regForm);
const rootEl = document.getElementById("content");

export class App extends React.Component{

	constructor(){
		super();

	}

	render(){

		return (
			<Provider store={store}>
				<RegForm />
			</Provider>

		);

	}

}

ReactDOM.render(
	<App />,
    rootEl
)
