import React, {Component} from 'react';
import {combineReducers} from 'redux';
import {Provider} from 'react-redux';
import * as reducers from '../reducers';


export default class AppLoader extends Component{

	constructor(props){
		super(props);
	}

	render(){
		return (
		<div>
			Hi
		</div>
		);
	}
}


