import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { isUserLoggedIn } from 'helpers';
import { Header, Container, Card, Grid, Button, Dropdown } from 'semantic-ui-react';

import './UnassignedMessages.css';
import Aux from 'hoc/Aux';
import UnassignedMessageList from 'components/UnassignedMessages/UnassignedMessageList';
import Messages from 'containers/Messages';

import './UnassignedMessages.css';

const skills = [
    { key: 'art', text: 'Art', value: 'art' },
    { key: 'maths', text: 'Maths', value: 'maths' },
    { key: 'music', text: 'Music', value: 'music' },
    { key: 'science', text: 'Science', value: 'science' },
    { key: 'technology', text: 'Technology', value: 'technology' },
  ]
  
  const languages = [
    { key: 'english', text: 'English', value: 'english' },
    { key: 'cantonese', text: '廣東話', value: 'cantonese' },
    { key: 'german', text: 'Deutsche', value: 'german' },
    { key: 'hungarian', text: 'Magyar', value: 'hungarian' },
    { key: 'polish', text: 'Polskie', value: 'polish' },
    { key: 'punjabi', text: 'ਪੰਜਾਬੀ', value: 'punjabi' },
    { key: 'urdu', text: 'اردو', value: 'urdu' },
  ]

class UnassignedMessages extends Component {
    state = {
        showUnassignedMessages: true,
    }

    /* showMyMessagesHandler = () => {
        this.setState({showUnassignedMessages: false});
    } */

    myMessagesClickedHandler = (event) => {
        this.props.history.push('/messages');
        event.preventDefault();
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
            },
            {
                'id': 5,
                'from': 'test',
                'last_interaction': 'shfgsdfhgsdfhdsgfgdhsfsdf',
                'created_at': Date.now(),
                'messages': [
                    {
                        'id': 5,
                        'from': 'user',
                        'content': 'hdfjsdghsjdf',
                        'created_at': Date.now()
                    }
                ]
            },
            {
                'id': 6,
                'from': 'test',
                'last_interaction': 'shfgsdfhgsdfhdsgfgdhsfsdf',
                'created_at': Date.now(),
                'messages': [
                    {
                        'id': 6,
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
                    className='UnassignedMessages__Button'
                    onClick={this.myMessagesClickedHandler}
                    >My Messages</Button>
                    <Container fluid className='UnassignedMessages'>
                        <Grid.Column className='UnassignedMessages__Grid'>
                        <Header.Content className='UnassignedMessages_Header'>Unassigned Messages</Header.Content>
                        <Container
                            style={{marginBottom: '2%'}}>
                                <Header>
                                Filter by:
                                </Header>
                                <Dropdown 
                                placeholder='Skills' 
                                multiple 
                                selection 
                                options={skills} 
                                style={{marginRight: '2%'}}
                                />
                                <Dropdown 
                                placeholder='Languages' 
                                multiple 
                                selection 
                                options={languages} 
                                />
                            </Container>
                        <Card.Group className='UnassignedMessages__CardGroup'>
                            <UnassignedMessageList 
                                unassignedMessages={unassignedMessages}/>
                        </Card.Group>
                        </Grid.Column>
                    </Container>
                    </Aux>
            
        )

        if (!this.state.showUnassignedMessages) {
            page = (
                <Messages/>
            )
        }

        return (
            <div>
                {page}
            </div>

        )
    }
}

export default withRouter(UnassignedMessages);