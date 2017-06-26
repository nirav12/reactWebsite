import {Route, IndexRoute, Redirect} from 'react-router';
import Home from './Home/Home.Container';
import React from "react";

export default(
	<Route path="/" component={Home}>
		<Redirect from="*" to="/defaultPage" />
	</Route>
);