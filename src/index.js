import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { 
	BrowserRouter as Router, 
	Switch, 
	Route,
	Redirect
} from 'react-router-dom';
import configureStore from './configureStore';

import './index.css';
import App from './App';
import Signup from 'containers/Signup';
import Login from 'containers/Login';
import NotFound from 'containers/NotFound';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

// replace StrictMode somewhere

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Switch>
				<Route path="/" exact={true} component={App} />
				
				<Route path="/volunteer-with-us" component={Signup} />
				<Route path="/login" render={() => (
					// TODO: Add User Token and isAuthorised to localStorage once user has been authorised
					localStorage.getItem('user') ? <Redirect to={{ pathname: '/login', state: '/messages' }}/> : <Login/>
				)} />
				<Route path="/messages" render={() => (
					// TODO: Replace <NotFound/> placeholder
					localStorage.getItem('user') ? <NotFound/> : <Redirect to={{ pathname: '/login', state: '/messages' }}/>
				)}/>
				<Route path="*" component={NotFound}/>
			</Switch>
		</Router>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
