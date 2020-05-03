import { fetchData, putData, success } from './utils';

function fetchUnassignedRequests(id){
    return ( dispatch ) => {
      mockResult( dispatch );
  }
}

const mockResult = (dispatch) => {
  const response = {
    'payload': 
      [{
        "id": 4,
        "content": "I would like help with maths",
        "created_at": "2020-04-24T16:16:57.979Z",
        "updated_at": "2020-04-24T19:15:07.466Z",
        "task_language": null,
        "childs_age": 6,
        "parent_id": 22,
        "volunteer_id": null,
        "skill": "maths"
        },
        {
        "id": 5,
        "content": "I would like help with physics",
        "created_at": "2020-04-24T16:16:57.982Z",
        "updated_at": "2020-04-24T19:18:03.980Z",
        "task_language": null,
        "childs_age": null,
        "parent_id": 22,
        "volunteer_id": null,
        "skill": "science",
      }]
  };
  dispatch({type: 'FETCH_UNASSIGNED_REQUESTS', payload: response.payload});
}

export {
  fetchUnassignedRequests
}