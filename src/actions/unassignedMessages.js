import { fetchData, putData, success } from './utils';

function fetchUnassignedRequests(){
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
        "created_at": "2020-03-24T16:16:57.979Z",
        "updated_at": "2020-04-24T19:15:07.466Z",
        "task_language": "German",
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
        "task_language": "Hungarian",
        "childs_age": null,
        "parent_id": 22,
        "volunteer_id": null,
        "skill": "science",
      },
      {
        "id": 3,
        "content": "I would like help with physics",
        "created_at": "2020-04-24T16:16:57.982Z",
        "updated_at": "2020-04-24T19:18:03.980Z",
        "task_language": "Polish",
        "childs_age": 9,
        "parent_id": 22,
        "volunteer_id": null,
        "skill": "science",
      },
      {
        "id": 6,
        "content": "I would like help with physics",
        "created_at": "2020-04-24T16:16:57.982Z",
        "updated_at": "2020-04-24T19:18:03.980Z",
        "task_language": "Hungarian",
        "childs_age": 10,
        "parent_id": 22,
        "volunteer_id": null,
        "skill": "science",
      }]
  };

  const unassignedRequests = Object.entries(response.payload)
    .map(([,item]) => item)
    .sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at));

  dispatch({type: 'FETCH_UNASSIGNED_REQUESTS', payload: unassignedRequests});
}

export {
  fetchUnassignedRequests
}