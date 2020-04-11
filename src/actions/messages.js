import { fetchData, fetchSuccess } from 'actions/utils';

export function fetchMessages(id) {
    return ( dispatch ) => {
        fetchData( `/api/messages/` )
            .then(( result ) => {
                dispatch(fetchSuccess('FETCH_MESSAGES', result));
            })

    }
}