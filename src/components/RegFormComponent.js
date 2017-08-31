import * as React from "react";
import * as ReactDOM from "react-dom";
import {Button} from "react-bootstrap";
import {connect} from "react-redux";
import {addUser} from "../actions/RegFormAction";
import PropTypes from "prop-types";
import validator from "validator";
import isEmpty from "lodash/isEmpty";
import classnames from "classnames";
import "../assets/css/signupform.css";

function mapStateToProps(state) {
	return {
		name:state.RegFormReducers
	};

}


const mapDispatchToProps = {
	addUser
};


export default connect(mapStateToProps,mapDispatchToProps) (class RegFormComponent extends React.Component{

	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.updateData = this.updateData.bind(this);
		this.clearData = this.clearData.bind(this);
		this.state ={
			email:"",
			psw: "",
			pswRepeat:"",
			errors:{}
		};
	}

	componentDidMount(){
		
	}

	handleClick() {
		const {addUser} = this.props;
		addUser("nirav2");
	}

	updateData(e){
		this.setState({[e.target.name]:e.target.value});
	}

	clearData(){
		this.setState({name:""});
		ReactDOM.findDOMNode(this.refs.myInput).focus();
	}

	submit(e){
		const {email, psw, pswRepeat} = this.state;
		// this.setState({ 
		// 	errors:{} 
		// });
		e.preventDefault();
		let errors ={};
		if(!validator.isEmail(email)){
			errors.email="Email is not Valid";
		}
		if(validator.isEmpty(psw)){
			errors.psw="Password is Required";
		}
		if(validator.isEmpty(pswRepeat)){
			errors.pswRepeat="Repeat Password is Required";
		}
		if(!validator.equals(psw,pswRepeat)){
			errors.psw="Password is not matching";
		}
		this.setState({
			errors
		});

	}

	render(){
		const {email, psw, pswRepeat,errors} = this.state;
		return (
			<div>
				{/* <input type="text" value={this.state.name} onChange={this.updateData} ref="myInput"/>
				<button onClick={this.clearData}>Clear</button>
				<h4>{this.state.name}</h4>  */}

				<h2>Signup Form</h2>

				<form onSubmit={this.submit.bind(this)} className="formBorder">
					<div className="container">
						<div className={classnames("form-group", {"has-error":errors.email})}>
							<label><b>Email</b></label>
							<input type="text" placeholder="Enter Email" name="email" value={email} onChange={this.updateData} />
							{errors.email && <span className="help-block">{errors.email}</span>}
						</div>

						<label><b>Password</b></label>
						<input type="password" placeholder="Enter Password" name="psw" value={psw} onChange={this.updateData} />
						{errors.psw && <span className="help-block">{errors.psw}</span>}

						<label><b>Repeat Password</b></label>
						<input type="password" placeholder="Repeat Password" name="pswRepeat" value={pswRepeat} onChange={this.updateData} />
						{errors.pswRepeat && <span className="help-block">{errors.pswRepeat}</span>}

						<input type="checkbox" checked="checked" /> Remember me
						<p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

						<div className="clearfix">
							<button type="button" className="cancelbtn">Cancel</button>
							<button type="submit" className="signupbtn">Sign Up</button>
						</div>
					</div>
				</form>
			</div>
		);

	}

});

