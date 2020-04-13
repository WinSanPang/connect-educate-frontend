import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchMessages } from 'actions';
import { isUserLoggedIn } from 'helpers';
import { Grid, Button } from 'semantic-ui-react';

import './messages.css';
import Aux from 'hoc/Aux';
import MessageList from 'components/MessageList';
import MessageChat from 'components/MessageChat';
import UnassignedMessages from 'containers/UnassignedMessages';

class Messages extends Component {
    state = {
        showUnassignedMessages: false
    }

    unassignedMessagesClickedHandler = () => {
        this.setState((prevState) => ({showUnassignedMessages: !prevState.showUnassignedMessages}));
    }

    componentDidMount() {
        if(!isUserLoggedIn()) {
            return( <Redirect to="/login"/> );
        }
        
        const { fetchMessages } = this.props;
        fetchMessages();
    }

    render() {
        const { messages, selectedMessage } = this.props;

        if (!messages) {
            return null;
        }

        const current = selectedMessage || messages[0];
        
        let page = (
            <Aux>
            <Button 
                href='/unassigned-messages'
                >Unassigned Messages</Button>
                <Grid
                    celled
                    columns={12}>
                    <Grid.Row stretched>
                        <Grid.Column width={4}>
                            <MessageList 
                                    messages={messages} 
                                    selectedId={current.id} 
                            />
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <MessageChat selectedMessage={current}/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                </Aux>
        )
    
        if (this.state.showUnassignedMessages) {
            page = (
                <UnassignedMessages/>
            )
        } else 

        return (
            <div className="messages__container">
                {page}
            </div>

        )
    }
}

const mapDispatchToProps = ( dispatch ) => ({
	fetchMessages: ( id ) => {
		dispatch( fetchMessages( id ) );
	},
});

const mapStateToProps = ( state ) => ({
    messages: state.messages,
    selectedMessage: state.selectedMessage,
});

export default connect( mapStateToProps, mapDispatchToProps )( Messages );