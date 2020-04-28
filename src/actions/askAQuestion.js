import { postData } from './utils';
import history from '../helpers/history';

const sendQuery = parent => {
    const request = {};
    request.parent = parent;

    return dispatch => {
    return postData('create_parent_and_task', request)
        .then(response => {
          //history.push('/query-submitted');
          //dispatch({type: 'PARENT_REQUEST_SENT', payload: response.payload})
          mockResult(dispatch)
        })
        .catch(error => {
          //dispatch({type: 'PARENT_REQUEST_FAIL', error: error.error})
          mockResult(dispatch)
        })
  }
};

const mockResult = (dispatch) => {
  const response = {
    "parent": {
        "email": "volunteer70@email.com",
      "first_name" : "Sally",
      "password" : "password",
      "preferred_language": "Turkish",
        "english_proficiency": "beginner"
    },
    "task": {
      "content": "Can you help me with translating this document please?",
      "skill": "Maths",
      "childs_age": 10,
      "task_language": "English"
    }
  }
  dispatch({type: 'PARENT_REQUEST_SENT', payload: true});
}

const mockResultError = (dispatch) => {
  const error = {
    "error": "Request failed to send, please try again"
  }
  dispatch({type: 'PARENT_REQUEST_FAIL', error: error.error});
}





export {
    sendQuery
}