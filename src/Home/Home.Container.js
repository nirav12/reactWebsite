import React,{Component} from 'react';
import '../assets/css/main.css';
import Sidebar from '../Sidebar/Sidebar.Container';
import Header from '../components/header';
import Banner from '../components/banner';
import Content from '../components/content';
import Search from '../components/search';
import Menu from '../components/menu';
import Footer from '../components/footer';

export default class Home extends Component{
	
	render(){
		return (
				<div id="wrapper">
					<div id="main">
						<div className="inner">
							<Header />
							{this.props.children ? this.props.children : <span><Banner /><Content /></span>}
						</div>
					</div>	
					
					<div id="sidebar">
						<div className="inner">
							<Search />
							<Menu />
							<Footer />
						</div>
					</div>
					
				</div>
		);
	}


}