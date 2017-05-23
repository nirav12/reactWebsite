import React, {Component} from 'react';
import {render} from 'react-dom';
import {combineReducers} from 'redux';
import {Provider} from 'react-redux';
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);

const store = createStore(reducer);

function mapStateToProps(){


}

function mapDispatchToProps(){


}

export default class App extends Component{


	render(){
		return (
		<div>
			<Provider store={store}>
				<RegForm /> 
			</Provider>
		</div>
		);

	}


}


