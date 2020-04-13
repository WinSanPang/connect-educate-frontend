import { postData } from './utils';

const sendQuery = parent => {
    const request = {};
    request.parent = parent;

    return dispatch => {
    return postData('create_parent_and_task', request)
        .then(response => {

          dispatch({type: 'PARENT_REQUEST_SENT', payload: true})
        })
        .catch(error => {
          dispatch({type: 'PARENT_REQUEST_FAIL', payload: true})
        })
  }
};

export {
    sendQuery
}