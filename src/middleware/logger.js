const logger = ( store ) => ( next ) => ( action ) => {
	if ( action ) {
		console.group( action.type ); 
		console.info( 'Dispatching', action ); 

		const result = next( action );

		console.log( 'next state', store.getState() ); 
		console.groupEnd(); 

		return result;
	}

	console.error( 'action is null' );
	return null;
};

export default logger;
