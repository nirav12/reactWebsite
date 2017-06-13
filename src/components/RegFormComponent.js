import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {addUser} from '../actions/RegFormAction';
import PropTypes from 'prop-types';

function mapStateToProps(state) {
	return {
		name:state.RegFormReducers
	}

}

const mapDispatchToProps = {
	addUser
};

export default connect(mapStateToProps,mapDispatchToProps) (class RegFormComponent extends React.Component{

	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		const {addUser} = this.props;
		addUser('nirav2');
	}

	render(){
		return (
			<div>
			<Button href="#" onClick={this.handleClick}>Link</Button>
			<div>{this.props.name}</div>
			</div>
		);

	}

});

