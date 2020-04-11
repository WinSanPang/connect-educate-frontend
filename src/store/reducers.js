// import constants from '../constants';
import initialState from './initialState.json';

export default ( state = initialState, action ) => {
    const newState = {...state};

    switch ( action.type ) {
        case 'FETCH_MESSAGES':
            newState.messages = action.payload;
            break;
        case 'LOGIN_USER': 
            newState.user = action.payload;
            break;        
        case 'LOGGED_OUT_USER': 
            newState = undefined
            break;
        case 'LOGIN_FAILURE': 
            newState.loginError = action.error;
            break;
        default:
            break;
    }

    return newState;
}