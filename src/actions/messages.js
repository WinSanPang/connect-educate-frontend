import { fetchData, success } from './utils';

export function fetchMessages(id) {
    return ( dispatch ) => {
        fetchData( `/api/messages/` )
            .then(( result ) => {
                dispatch(success('FETCH_MESSAGES', result));
            })

    }
}