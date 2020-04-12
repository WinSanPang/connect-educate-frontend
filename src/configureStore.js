import { applyMiddleware, createStore } from 'redux';
// To fix Redux Chrome Extension
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from './middleware/logger';
import monitorReducerEnhancer from './enhancers/monitorReducer';

import rootReducers from './store';

export default function configureStore( initialState ) {
	const middleware = [
		process.env.NODE_ENV === 'development' && loggerMiddleware,
		thunkMiddleware,
	].filter( Boolean );

	if ( process.env.NODE_ENV === 'development' ) {
		console.log( '#development mode' ); 
		console.dir( middleware ); 
	}
	const middlewareEnhancer = applyMiddleware( ...middleware );

	try {
		let composeEnhancers;

		if ( process.env.NODE_ENV === 'development' ) {
			composeEnhancers = composeWithDevTools(
				middlewareEnhancer,
				process.env.NODE_ENV === 'development' ? monitorReducerEnhancer : null,
			);
		} else {
			composeEnhancers = middlewareEnhancer;
		}

		return createStore( rootReducers, initialState, composeEnhancers );
	} catch ( e ) {
		console.error( ' Error', e.message ); 
		return createStore( rootReducers, applyMiddleware( thunkMiddleware ) );
	}
}
