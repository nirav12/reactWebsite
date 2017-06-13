import 'babel-polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppLoader from './containers/App';
import {Provider} from 'react-redux';
import {applyMiddleware,createStore} from 'redux';
import allReducers from "./reducers"; 
import logger from 'redux-logger';
import { AppContainer } from 'react-hot-loader';
import {store, history} from './store';
import LoginForm from './components/LoginFormComponent';
import RegFormComponent from './components/RegFormComponent';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

window.reactRoot =  ReactDOM.render(
		<Provider store={store}>
			<Router history={history}>
				<div>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/loginForm">Login Form</Link></li>
						<li><Link to="/regForm">Reg Form</Link></li>
					</ul>

					<hr/> 
						

					<Route exact path="/" component={AppLoader} />
					<Route path="/loginForm" component={LoginForm} />
					<Route path="/regForm" component={RegFormComponent} />
				</div>
			</Router>
		</Provider>, 
		document.getElementById('contentData')
);
