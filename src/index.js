import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { 
	BrowserRouter as Router, 
	Switch, 
	Route
} from 'react-router-dom';
import configureStore from './configureStore';

import './index.css';
import App from './App';
import Signup from 'containers/Signup';
import NotFound from 'containers/NotFound';
import AskAQuestion from 'containers/AskAQuestion'
import * as serviceWorker from './serviceWorker';

const store = configureStore();

// replace StrictMode somewhere

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Switch>
				<Route path="/" exact={true} component={App} />
				<Route path="/volunteer-with-us" component={Signup} />
				<Route path="/ask-a-question" component={AskAQuestion} />
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
