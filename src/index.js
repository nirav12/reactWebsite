import React,{PropTypes}  from 'react';
import {render} from 'react-dom';
import {connect,Provider} from 'react-redux';
import {Router,browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {store} from './store/index';
import {history} from './store/index';
import routes from './routes';

//const store = configureStore();
//const history = syncHistoryWithStore(browserHistory,store);
const rootElement = document.getElementById("contentData");

render(<Provider store={store} history={history}>
			<Router history={history} routes={ routes }/>
		</Provider>,rootElement);



