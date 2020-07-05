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

const postData = ( endpoint, user ) => {
    const data = JSON.stringify(user)
    var config = {
      method: 'post',
      url: 'http://localhost:3000/users/sign_in\n',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

    // console.log('hello from post data')
    // console.log(config.API_URL, endpoint, user)
    // const data = JSON.stringify(user)
    // const response = axios({
    //     method: 'post',
    //     headers: { 
    //         'Content-Type': 'application/json'
    //       },
    //     url: `${config.API_URL}/${endpoint}`,
    //     data
    // });

	// return response;
}

const patchData = ( endpoint, data ) => {
    const response = axios({
        method: 'patch',
        url: `${config.API_URL}/${endpoint}`,
        data
    });

	return response;
}

export {
    success, 
    fetchData,
    postData,
    patchData
}
