import { fetchData } from './utils';

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
        dispatch(login(response));
    }
}

export {
    userFetchLogin,
    userRemoveLogin
}
