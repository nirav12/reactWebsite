import * as React from "react";
import * as ReactDOM from "react-dom";
import {Button} from "react-bootstrap";
import {connect} from "react-redux";
import {addUser} from "../actions/RegFormAction";
import PropTypes from "prop-types";

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
				<input type="text" value={this.state.name} onChange={this.updateData} ref="myInput"/>
				<button onClick={this.clearData}>Clear</button>
				<h4>{this.state.name}</h4>
			</div>
		);

	}

});

