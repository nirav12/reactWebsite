import {Route, IndexRoute, Redirect} from 'react-router';
import Home from './Home/Home.Container';
import about from './components/about';
import themes from './components/themes';
import contact from './components/contact';
import jeans from './components/jeans';
import pink from './components/pink';
import user from './components/users';
import indexPage from './components/indexPage';
import RegFormComponent from './components/RegFormComponent';
import React from "react";

export default(
	<Route path="/" component={Home}>
		<Route path="/Home" component={indexPage} />
		<Route path="/About" component={about} />
		<Route path="/Themes" component={themes} />
		<Route path="/Contact" component={contact} />
		<Route path="/Jeans" component={jeans} />
		<Route path="/Pink" component={pink} />
		<Route path="/Users" component={user} />
		<Route path="/Regform" component={RegFormComponent} />
	</Route>
);