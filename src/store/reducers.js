// import constants from '../constants';

export default ( state, action ) => {
    const newState = state === undefined ? {} : {...state};

    switch ( action.type ) {
        case 'FETCH_MESSAGES':
            newState.messages = action.payload;
            break;
        case 'LOGIN_SUCCESS': 
            newState.user = action.payload.user;
            break;        
        case 'LOGIN_FAILURE': 
            newState.loginError = action.error;
            break;
        case 'LOGGED_OUT': 
            return undefined
        default:
            break;
    }

    return newState;
}