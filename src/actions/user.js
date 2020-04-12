import { fetchData } from './user';

const getUser = user => ({
    type: 'GET_USER',
    payload: user,
})

const loginUser = () => {
    return true;
}



export {
    getUser,

}
