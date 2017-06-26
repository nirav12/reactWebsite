import React,{Component} from 'react';
import Header from '../components/header';
import Banner from '../components/banner';
import Content from '../components/content';

export default class Main extends Component{
	
	render(){
		return (
			<div id="main">
				<div className="inner">
					<Header />
					<Banner />
					<Content />
				</div>
			</div>
		);
	}


}