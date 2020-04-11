import axios from 'axios';
import config from '../config';

const success = ( type, data ) => ({
	type,
	payload: data,
});

const fetchData = ( endpoint, data ) => {
    const response = axios({
        method: 'get',
        url: `${config.API_URL}/${endpoint}`,
        data,
        responseType: 'json'
	});

	return response;
}

const postData = ( endpoint, data ) => {
    const response = axios({
        method: 'post',
        url: `${config.API_URL}/${endpoint}`,
        data
    });

	return response;
}

export {
    success, 
    fetchData,
    postData,
}
