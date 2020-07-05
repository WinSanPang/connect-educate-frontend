import { fetchData, postData, patchData, success } from './utils';
import history from '../helpers/history';
import axios from 'axios'

const login = response => ({ type: 'LOGIN_SUCCESS', payload: response });
const failure = error => ({ type: 'LOGIN_FAILURE', error });

const userFetchLogin = user => {
    return dispatch => {
            const data = JSON.stringify(user)
    var config = {
      method: 'post',
      url: 'http://localhost:3000/users/sign_in\n',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    return axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
        addToLocal(response.data);
        history.push('/messages');
        dispatch(login(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

        
        // return postData('users/sign_in', user)
            // .then(response => {
            //     // TODO: remove mockResult and un-comment in the success action below
            //     /* mockResult(dispatch) */

            //     addToLocal(response.data);
            //     history.push('/messages');
            //     dispatch(login(response));
            // })
            // .catch(error => {
            //     // TODO: replace with failure action
            //     /* if( request.user.email === 'test@fail.com' ){
            //         dispatch(failure(error.toString()));
            //     }
            //     else {
            //         console.log(user);
            //         mockResult(dispatch)
            //     } */
            //     console.log('win', user);
            //     dispatch(failure(error.toString()));
            // });
    };
}

const userRemoveLogin = user => {
    return dispatch => {
        localStorage.removeItem('user');
        dispatch({ type: 'LOGGED_OUT' });
    }
}

const addToLocal = (response) => {
    if (response) {
        localStorage.user = JSON.stringify(response);
        return true;
    }
    console.log('This should not come out')
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
