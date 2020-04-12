import { combineReducers } from 'redux';
import ConnectReducers from './reducers';

// const rootReducer = combineReducers({
// 	connect: ConnectReducers,
// });

const rootReducer = ConnectReducers;

export default rootReducer;
