import axios from 'axios';

export const fetchSuccess = ( type, data, parent = null ) => ({
	type,
	payload: data,
	parent,
});

export const fetchData = ( endpoint ) => {
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

export const postData = ( endpoint, data ) => {
    const response = axios({
        method: 'post',
        url: `${process.env.CONNECT_API_URL}/${endpoint}`,
        data
    });

	return response;
}
