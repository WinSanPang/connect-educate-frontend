import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { isUserLoggedIn } from 'helpers';
import { Grid, Button } from 'semantic-ui-react';

import './messages.css';
import Aux from 'hoc/Aux';
import MessageList from 'components/MessageList';
import MessageChat from 'components/MessageChat';
import UnassignedMessages from 'containers/UnassignedMessages';

class Messages extends Component {
    state = {
        showUnassignedMessages: true,
        showMessages: false
    }

    /* showMyMessagesHandler = () => {
        this.setState({showUnassignedMessages: false});
    } */

    unassignedMessagesClickedHandler = () => {
        this.setState((prevState) => {
            return { showUnassignedMessages: !prevState.showUnassignedMessages };
        } );
    }

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

        let page = (
            <Aux>
            <Button 
                    onClick={this.unassignedMessagesClickedHandler}
                    >Unassigned Messages</Button>
                <Grid
                    celled
                    columns={12}>
                    <Grid.Row stretched>
                        <Grid.Column width={4}>
                            <MessageList 
                                messages={mockedMessages}
                                />
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <MessageChat/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                </Aux>
        )

        if (this.state.showUnassignedMessages) {
            page = (
                <UnassignedMessages/>
            )
        }

        return (
            <div className="messages__container">
                {page}
            </div>

        )
    }
}

export default Messages