// import constants from '../constants';

export default ( state, action ) => {
    const newState = state === undefined ? {} : {...state};

    switch ( action.type ) {
        case 'FETCH_MESSAGES':
            newState.messages = action.payload.messages;
            break;        
        case 'UPDATE_SELECTED_MESSAGE':
            newState.selectedMessage = action.payload.id;
            break;
        case 'LOGIN_SUCCESS': 
            newState.user = action.payload.user;
            break;        
        case 'LOGIN_FAILURE': 
            newState.loginError = action.error;
            break;
        case 'LOGGED_OUT': 
            return undefined;
            break;
        case 'RESET_PASSWORD_SUCCESS':
            newState.resetPassword = action.payload;
            break;
        case 'RESET_PASSWORD_FAIL':
            newState.resetPasswordError = action.error;
            break;
        case 'PARENT_REQUEST_SENT':
            newState.parentRequestSent = action.payload;
            break;
        case 'PARENT_REQUEST_FAIL':
            newState.parentRequestError = action.error;
            break;
        default:
            break;
    }

    return newState;
}