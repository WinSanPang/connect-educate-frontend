import { fetchData, postData, patchData } from './utils';
import history from '../helpers/history';

const userFetchLogin = user => {
    const request = {};
    request.user = user;

    return dispatch => {
        return fetchData('users/sign_in', request)
            .then(reponse => {
                // TODO: replace with success action
                mockResult(dispatch)
            })
            .catch(error => {
                // TODO: replace with failure action
                if( request.user.email === 'test@fail.com' ){
                    dispatch(failure(error.toString()));
                }
                else {
                    console.log(user);
                    mockResult(dispatch)
                }
                // dispatch(failure(error.toString()));
            });
    };
}

const userRemoveLogin = user => {
    return dispatch => {
        localStorage.removeItem('user');
        dispatch({ type: 'LOGGED_OUT' });
    }
}

const login = response => ({ type: 'LOGIN_SUCCESS', payload: response.payload });
const failure = error => ({ type: 'LOGIN_FAILURE', error });

const addToLocal = (response) => {
    if (response.authenticated) {
        console.log(response.user);
        localStorage.user = JSON.stringify(response.user);
        return true;
    }

    return false;
}

// TODO: Remove mock Result
const mockResult = (dispatch) => {
    const response = {
    'payload': 
        {
            'user': 
            {
                'isAuthenticated': true,
                'token': '1234'
            },
            'authenticated': true
        }
    }
    
    if (addToLocal(response.payload)) {
        history.push('/messages');
        dispatch(login(response));
    }
}

const forgotPasswordRequest = user => {
    const request = {};
    request.user = user;

    return dispatch => {
        return postData('users/password', request)
            .then(response => {
                dispatch({type: 'FORGOT_PASSWORD_SUCCESS', payload: true})
            })
            .catch(error => {
                dispatch({type: 'FORGOT_PASSWORD_FAIL', payload: false})
            })
    }
}

const resetUserPassword = user => {
    const request = {};
    request.user = user;

    return dispatch => {
        return patchData('users/reset_password', request)
            .then(response => {
                dispatch({type: 'RESET_PASSWORD_SUCCESS', payload: true})
            })
            .catch(error => {
                dispatch({type: 'RESET_PASSWORD_FAIL', payload: false})
            })
    }
}

export {
    userFetchLogin,
    forgotPasswordRequest,
    resetUserPassword,
    userRemoveLogin,
}
