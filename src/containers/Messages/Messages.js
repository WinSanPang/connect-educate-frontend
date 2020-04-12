import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { isUserLoggedIn } from 'helpers';
import { Grid } from 'semantic-ui-react';

import MessageList from 'components/MessageList';
import MessageChat from 'components/MessageChat';

import './messages.css';

class Messages extends Component {

    componentDidMount() {
        if(!isUserLoggedIn()) {
            return( <Redirect to="/login"/> );
        }
    }

    render() {
        const mockedMessages = [
            {
                'id': 1,
                'from': 'test',
                'last_interaction': 'shfgsdfhgsdfhdsgfgdhsfsdf',
                'created_at': Date.now(),
                'messages': [
                    {
                        'id': 1,
                        'from': 'user',
                        'content': 'hdfjsdghsjdf',
                        'created_at': Date.now()
                    }
                ]
            },
            {
                'id': 2,
                'from': 'test',
                'last_interaction': 'shfgsdfhgsdfhdsgfgdhsfsdf',
                'created_at': Date.now(),
                'messages': [
                    {
                        'id': 2,
                        'from': 'user',
                        'content': 'hdfjsdghsjdf',
                        'created_at': Date.now()
                    }
                ]
            }
        ]

        return (
            <div className="messages__container">
                <Grid
                    celled
                    columns={12}>
                    <Grid.Row stretched>
                        <Grid.Column width={4}>
                            <MessageList messages={mockedMessages}/>
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <MessageChat/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>

        )
    }
}

export default Messages