import React,{Component} from 'react';
import '../assets/css/main.css';
import Main from '../Main/Main.Container';
import Sidebar from '../Sidebar/Sidebar.Container';

export default class Home extends Component{
	
	render(){
		return (
				<div id="wrapper">
					<Main />
					<Sidebar />
				</div>
		);
	}


}