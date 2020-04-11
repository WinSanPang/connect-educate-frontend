// import constants from '../constants';
import initialState from './initialState.json';

export default ( state = initialState, action ) => {
    const newState = {...state};

    switch ( action.type ) {
        case 'FETCH_MESSAGES':
            newState.messages = action.payload;
            break;
        default:
            break;
    }

    return newState;
}