import { fetchData } from './utils';

const userFetchLogin = user => {
    return dispatch => {
        return fetchData('users/sign_in', user)
            .then(user => {
                user.isAuthenticated = true;
                dispatch(login(user));
            })
            .catch(error => {
                // TODO: replace with failure action
                mockResult(user, dispatch)
                // dispatch(failure(error.toString()));
            });
    };
}

const login = user => ({ type: 'LOGIN_USER', payload: user });
const failure = error => ({ type: 'LOGIN_FAILURE', error });

// TODO: Remove mock Result
const mockResult = (user, dispatch) => {
    user.payload = {
        'isAuthenticated': true,
        'token': '1234'
    };

    dispatch(login(user));
}

const resetUserPassword = email => {
    //I don't know
}

export {
    userFetchLogin,
    resetUserPassword
}
