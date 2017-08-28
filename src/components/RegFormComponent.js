import * as React from "react";
import * as ReactDOM from "react-dom";
import {Button} from "react-bootstrap";
import {connect} from "react-redux";
import {addUser} from "../actions/RegFormAction";
import PropTypes from "prop-types";
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
			name:" "
		};
	}

	componentDidMount(){
		
	}

	handleClick() {
		const {addUser} = this.props;
		addUser("nirav2");
	}

	updateData(e){
		this.setState({name:e.target.value});
	}

	clearData(){
		this.setState({name:""});
		ReactDOM.findDOMNode(this.refs.myInput).focus();
	}

	render(){
		return (
			<div>
				{/* <input type="text" value={this.state.name} onChange={this.updateData} ref="myInput"/>
				<button onClick={this.clearData}>Clear</button>
				<h4>{this.state.name}</h4>  */}

				<h2>Signup Form</h2>

				<form action="/action_page.php" className="formBorder">
					<div className="container">
						<label><b>Email</b></label>
						<input type="text" placeholder="Enter Email" name="email" required />

						<label><b>Password</b></label>
						<input type="password" placeholder="Enter Password" name="psw" required />

						<label><b>Repeat Password</b></label>
						<input type="password" placeholder="Repeat Password" name="psw-repeat" required />
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

