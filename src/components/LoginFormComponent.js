import React,{Component,PropTypes} from 'react';
import {Button} from 'react-bootstrap';

export default class LoginForm extends Component{

	constructor(props){
		super(props);
		this.state = {value: ''};
		this.handleChange=this.handleChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
	}

	handleSubmit(event){
		event.preventDefault();
	}

	handleChange(event){
		const target = event.target;
		const name = target.name;
		const value = target.value;
		this.setState({[name]:value});
	}

	render(){
		return(
			<form>
				<div>
				<div>
				<label>Username:
				<input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
				</label>
				</div>
				<div>
				<label>Password:
				<input type="Password" name="password" value={this.state.password} onChange={this.handleChange}/>
				</label>
				</div>
				<button type="button" onClick={this.handleSubmit} />
				</div>
			</form>
		);

	}

}