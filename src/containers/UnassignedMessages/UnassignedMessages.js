import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { isUserLoggedIn } from 'helpers';
import { Grid, Button } from 'semantic-ui-react';

import Aux from 'hoc/Aux';
import UnassignedMessageList from 'components/UnassignedMessageList';
import Messages from 'containers/Messages';
import MessageList from 'components/MessageList';
import MessageChat from 'components/MessageChat';

import './UnassignedMessages.css';

class UnassignedMessages extends Component {
    state = {
        showUnassignedMessages: true,
        showMessages: false
    }

    /* showMyMessagesHandler = () => {
        this.setState({showUnassignedMessages: false});
    } */

    myMessagesClickedHandler = () => {
        this.setState((prevState) => {
            return { showMessages: !prevState.showMessages };
        } );
    }

    componentDidMount() {
        if(!isUserLoggedIn()) {
            return( <Redirect to="/login"/> );
        }
    }

    render() {
        const unassignedMessages = [
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
                        >My Messages</Button>
                    <Grid
                        celled
                        columns={2}>
                        <Grid.Column>
                                <UnassignedMessageList 
                                    messages={unassignedMessages}
                                    />
                        </Grid.Column>
                    </Grid>
                    </Aux>
            
        )

        if (this.state.showMessages) {
            page = (
                <Messages/>
            )
        }

        return (
            <div className="messages__container">
                {page}
            </div>

        )
    }
}

export default UnassignedMessages