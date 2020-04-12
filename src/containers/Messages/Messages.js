import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchMessages } from 'actions';
import { isUserLoggedIn } from 'helpers';
import { Grid } from 'semantic-ui-react';

import MessageList from 'components/MessageList';
import MessageChat from 'components/MessageChat';

import './messages.css';

class Messages extends Component {
    state = {};

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

        return (
            <div className="messages__container">
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