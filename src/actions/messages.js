import { fetchData, success } from './utils';

function fetchMessages(id) {
    return ( dispatch ) => {
        mockResult( dispatch );

        // TODO: Add validation for user
        // fetchData( `/api/messages/` )
        //     .then(( result ) => {
        //         dispatch(success('FETCH_MESSAGES', result));
        //     });
    }
}

function updateSelectedMessage(id) {
    return dispatch => {
        dispatch(success('UPDATE_SELECTED_MESSAGE', {id}));
    }
}

// TODO: Remove mock Result
const mockResult = (dispatch) => {
    const response = {
        'payload': {
            'messages':
            [{
                'id': 1,
                'from': 'test',
                'last_interaction': 'shfgsdfhgsdfhdsgfgdhsfsdf',
                'created_at': Date.now(),
                'messages': [
                    {
                        'id': 1,
                        'from': 'user',
                        'content': 'Jelly beans croissant tootsie roll marzipan. Jelly-o dessert donut lemon drops chupa chups danish. Bear claw lemon drops fruitcake. Gingerbread toffee tootsie roll toffee muffin jelly beans.',
                        'created_at': Date.now()
                    },                    
                    {
                        'id': 3,
                        'from': 'user',
                        'content': 'Biscuit ice cream carrot cake cheesecake cupcake macaroon biscuit.',
                        'created_at': Date.now()
                    },                    
                    {
                        'id': 4,
                        'from': 'Mel',
                        'content': 'Sesame snaps pastry bear claw candy canes gummi bears dessert liquorice sweet halvah. Soufflé chocolate bar marzipan sugar plum sugar plum.',
                        'created_at': Date.now()
                    },
                ]
            },
            {
                'id': 2,
                'from': 'Another Test User',
                'last_interaction': 'shfgsdfhgsdfhdsgfgdhsfsdf',
                'created_at': Date.now(),
                'messages': [
                    {
                        'id': 2,
                        'from': 'abc',
                        'content': 'Cake sesame snaps chocolate cake cheesecake cotton candy cupcake. Gingerbread cupcake muffin halvah macaroon sugar plum icing. Sweet roll brownie dessert bear claw dragée sesame snaps. Apple pie toffee candy canes bear claw.',
                        'created_at': Date.now()
                    }
                ]
            },
            {
                'id': 3,
                'from': 'Third Test User',
                'last_interaction': 'shfgsdfhgsdfhdsgfgdhsfsdf',
                'created_at': '2020-02-01',
                'messages': [
                    {
                        'id': 2,
                        'from': 'test user',
                        'content': 'Marshmallow fruitcake soufflé jujubes topping. Cupcake topping gingerbread tart candy. Muffin bonbon liquorice cookie macaroon.',
                        'created_at': Date.now()
                    }
                ]
            }]
        }
    };

    dispatch(success('FETCH_MESSAGES', response.payload));
}



export {
    fetchMessages,
    updateSelectedMessage
}