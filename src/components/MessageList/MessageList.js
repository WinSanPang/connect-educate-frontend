import React, { Component } from 'react';
import { Card, Feed } from 'semantic-ui-react';

import MessageListItem from 'components/MessageListItem';


class MessageList extends Component {
    renderMessageListItems() {
        const { messages } = this.props;
        const elements = Object.entries( messages ).map( item =>  <MessageListItem key={item.id}/> );

        return elements;
    }

    render() {
        

        return (
            <Card fluid>
                <Card.Content>
                    <Card.Header>Chats</Card.Header>
                </Card.Content>
                <Card.Content>
                    <Feed>
                        { this.renderMessageListItems() }
                    </Feed>
                </Card.Content>
            </Card>
        )
    }
}

export default MessageList;