import { combineReducers } from 'redux';
import ConnectReducers from './reducers';

const rootReducer = combineReducers({
	content: ConnectReducers,
});

export default rootReducer;
