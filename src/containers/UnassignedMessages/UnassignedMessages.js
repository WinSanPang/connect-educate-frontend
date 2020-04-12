import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { isUserLoggedIn } from 'helpers';
import { Header, Card, Grid, Button } from 'semantic-ui-react';

import './UnassignedMessages.css';
import Aux from 'hoc/Aux';
import UnassignedMessageList from 'components/UnassignedMessages/UnassignedMessageList';
import Messages from 'containers/Messages';

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
            },
            {
                'id': 3,
                'from': 'test',
                'last_interaction': 'shfgsdfhgsdfhdsgfgdhsfsdf',
                'created_at': Date.now(),
                'messages': [
                    {
                        'id': 3,
                        'from': 'user',
                        'content': 'hdfjsdghsjdf',
                        'created_at': Date.now()
                    }
                ]
            },
            {
                'id': 4,
                'from': 'test',
                'last_interaction': 'shfgsdfhgsdfhdsgfgdhsfsdf',
                'created_at': Date.now(),
                'messages': [
                    {
                        'id': 4,
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
                    <Grid celled className='UnassignedMessages'>
                        <Grid.Column className='UnassignedMessages__Grid'>
                        <Header.Content className='UnassignedMessages_Header'>Unassigned Messages</Header.Content>
                        <Card.Group className='UnassignedMessages__CardGroup'>
                            <UnassignedMessageList 
                                unassignedMessages={unassignedMessages}/>
                        </Card.Group>
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