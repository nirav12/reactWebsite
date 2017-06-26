import React,{Component} from 'react';
import Search from '../components/search';
import Menu from '../components/menu';
import Content from '../components/content';
import Footer from '../components/footer';

export default class Sidebar extends Component{
	
	render(){
		return (
			<div id="sidebar">
				<div className="inner">
					<Search />
					<Menu />
					<Footer />
				</div>
			</div>
		);
	}


}