import { fetchData, success } from './utils';

function fetchMessages(user_id) {
    return ( dispatch ) => {
        mockResult( dispatch );

        // TODO: Add validation for user
        // fetchData( `/api/messages/` )
        //     .then(( result ) => {
        //         dispatch(success('FETCH_MESSAGES', result));
        //     });
    }
}

function fetchMessageThread( task_id ) {
    return dispatch => {
        const response = [
            {
                'id': 1,
                'user_id': 1,
                'content': 'Jelly beans croissant tootsie roll marzipan. Jelly-o dessert donut lemon drops chupa chups danish. Bear claw lemon drops fruitcake. Gingerbread toffee tootsie roll toffee muffin jelly beans.',
                'created_at': "2020-04-12T19:43:11.408Z",
                'updated_at': "2020-04-12T19:43:11.408Z",
                'task_id': 1
            },                    
            {
                'id': 3,
                'user_id': 1,
                'content': 'Biscuit ice cream carrot cake cheesecake cupcake macaroon biscuit.',
                'created_at': "2020-04-12T19:46:11.408Z",
                'updated_at': "2020-04-12T19:46:11.408Z",
                'task_id': 1
            },                    
            {
                'id': 4,
                'user_id': 13,
                'content': 'Sesame snaps pastry bear claw candy canes gummi bears dessert liquorice sweet halvah. Soufflé chocolate bar marzipan sugar plum sugar plum.',
                'created_at': "2020-04-12T19:49:11.408Z",
                'updated_at': "2020-04-12T19:49:11.408Z",
                'task_id': 1
            },
        ]

        // fetchData( `/message-thread/${task_id}` )
        //     .then(( result ) => {
        //         dispatch(success('FETCH_MESSAGE_THREAD', result));
        //     });

        dispatch(success('FETCH_MESSAGE_THREAD', response));
    }
}

function updateSelectedThread(id) {
    return dispatch => {
        dispatch(success('UPDATE_SELECTED_MESSAGE', {id}));
    }
}

function sendMessage(data) {
    return dispatch => {
        dispatch(success('UPDATE_SELECTED_MESSAGE', ));
        dispatch(fetchMessages(data));
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
                'created_at': "2020-04-12T19:49:11.408Z",
                'messages': [
                    {
                        'id': 1,
                        'from': 'user',
                        'content': 'Jelly beans croissant tootsie roll marzipan. Jelly-o dessert donut lemon drops chupa chups danish. Bear claw lemon drops fruitcake. Gingerbread toffee tootsie roll toffee muffin jelly beans.',
                        'created_at': "2020-04-12T19:51:11.408Z",
                    },                    
                    {
                        'id': 3,
                        'from': 'user',
                        'content': 'Biscuit ice cream carrot cake cheesecake cupcake macaroon biscuit.',
                        'created_at': "2020-04-12T18:51:11.408Z",
                    },                    
                    {
                        'id': 4,
                        'from': 'Mel',
                        'content': 'Sesame snaps pastry bear claw candy canes gummi bears dessert liquorice sweet halvah. Soufflé chocolate bar marzipan sugar plum sugar plum.',
                        'created_at': "2020-04-12T18:31:11.408Z",
                    },
                ]
            },
            {
                'id': 2,
                'from': 'Another Test User',
                'last_interaction': 'shfgsdfhgsdfhdsgfgdhsfsdf',
                'created_at': "2020-04-13T19:49:11.408Z",
                'messages': [
                    {
                        'id': 2,
                        'from': 'abc',
                        'content': 'Cake sesame snaps chocolate cake cheesecake cotton candy cupcake. Gingerbread cupcake muffin halvah macaroon sugar plum icing. Sweet roll brownie dessert bear claw dragée sesame snaps. Apple pie toffee candy canes bear claw.',
                        'created_at': "2020-04-13T19:49:11.408Z",
                    }
                ]
            },
            {
                'id': 3,
                'from': 'Third Test User',
                'last_interaction': 'shfgsdfhgsdfhdsgfgdhsfsdf',
                'created_at': "2020-02-01T13:49:11.408Z",
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

    const messages = Object.entries(response.payload.messages)
                        .map(([,item]) => item)
                        .sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at));

    dispatch(success('FETCH_MESSAGES', { 'messages': messages }));
}



export {
    fetchMessages,
    updateSelectedThread,
    fetchMessageThread
 }