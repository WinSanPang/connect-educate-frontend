const round = ( number ) => Math.round( number * 100 ) / 100;

const monitorReducerEnhancer = ( createStore ) => (
	reducer,
	initialState,
	enhancer,
) => {
	const monitoredReducer = ( state, action ) => {
		const start = performance.now();
		const newState = reducer( state, action );
		const end = performance.now();
		const diff = round( end - start );

		console.group( action.type ); // eslint-disable-line no-console
		console.log( 'reducer process time:', diff ); // eslint-disable-line no-console
		console.groupEnd(); // eslint-disable-line no-console

		return newState;
	};

	return createStore( monitoredReducer, initialState, enhancer );
};

export default monitorReducerEnhancer;
