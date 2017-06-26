import React,{Component} from 'react';
import {menuItems} from '../../json/theskirt';

export default class Menu extends Component{
	
	render(){

		const renObjData = menuItems.map(function(item,index){
							return (<li key={ index }>{item.name}</li>);
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