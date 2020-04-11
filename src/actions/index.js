import axios from 'axios';

const fetchSuccess = ( type, data, parent = null ) => ({
	type,
	payload: data,
	parent,
});

const fetchData = ( endpoint ) => {
    const data = {
        'id': 1, 
        'message': 'Testing',
        'author': 'Test'
    }

    return new Promise(function(resolve, reject) {
        resolve(data);
    });

    // const data = axios.get( `${process.env.CONNECT_API_URL}/${endpoint}`, {
	// 	responseType: 'json',
	// 	headers: [],
	// });

	// return data;
}

export function fetchMessages(id) {
    return ( dispatch ) => {
        fetchData( `/api/messages/` )
            .then(( result ) => {
                dispatch(fetchSuccess('FETCH_MESSAGES', result));
            })

    }
}
