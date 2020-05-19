import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { Header, Container, Card, Button, Dropdown } from 'semantic-ui-react';

import { isUserLoggedIn } from 'helpers';

import './UnassignedMessages.scss';
import UnassignedMessageList from 'components/UnassignedMessages/UnassignedMessageList';
import Messages from 'containers/Messages';

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

        let page = (
            <div className='UnassignedMessages'>
                <Button 
                    className='UnassignedMessages__Button'
                    onClick={this.myMessagesClickedHandler}
                    >My Messages</Button>
                    <Container fluid className='UnassignedMessages__Container'>
                        <Header.Content className='UnassignedMessages_Header'>Unassigned Requests</Header.Content>
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
                    </Container>
                    <Card.Group className='UnassignedMessages__CardGroup'>
                        <UnassignedMessageList 
                            />
                    </Card.Group>
                    </div>
            
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