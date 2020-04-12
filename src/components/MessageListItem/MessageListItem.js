import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import { Feed } from 'semantic-ui-react';
import { updateSelectedMessage } from 'actions';
import './message-item.css';

class MessageListItem extends Component {
    handleOnClick() {
        const { feedItem, updateSelectedMessage } = this.props;
        updateSelectedMessage(feedItem);
    }

    render() {
        const { feedItem, active } = this.props;
        const { messages } = feedItem;

        const feedDate = moment(feedItem.created_at);
        const className = active ? 'message-item__event active' : 'message-item__event';

        return (
            <Feed.Event 
                className={className}
                onClick={this.handleOnClick.bind(this)}>
                <Feed.Content className="message-item__content">
                    <Feed.Summary className="message-item__summary">
                        <span className="message-item__user">{feedItem.from}</span>
                        <Feed.Date>{feedDate.format('DD MMM')}</Feed.Date>
                    </Feed.Summary>
                    <Feed.Extra className="message-item__text" text>
                        { messages.slice(-1)[0].content.slice(0, 80) }...
                    </Feed.Extra>
                    <Feed.Meta>

                    </Feed.Meta>
                    
                </Feed.Content>
            </Feed.Event>
        )
    }
}

const mapDispatchToProps = ( dispatch ) => ({
	updateSelectedMessage: ( id ) => {
		dispatch( updateSelectedMessage( id ) );
	},
});

const mapStateToProps = ( state ) => ({
	messages: state.messages,
});

export default connect( mapStateToProps, mapDispatchToProps )( MessageListItem );