import React,{Component} from 'react';
import {menuItems} from '../../json/theskirt';
import {Link} from 'react-router';

export default class Menu extends Component{
	
	render(){

		const renObjData = menuItems.map(function(item,index){
							return (<li key={ index }><Link to={item.name}>{item.name}</Link></li>);
		});

		return (
			<nav id="menu">
				<header className="major">
					<h2>Menu</h2>
				</header>
				<ul>
				{renObjData}
				</ul>
				
			</nav>
		);
	}


}