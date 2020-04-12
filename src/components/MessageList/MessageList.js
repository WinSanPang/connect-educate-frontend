import React, { Component } from 'react';
import { Card, Feed } from 'semantic-ui-react';

import MessageListItem from 'components/MessageListItem';
import './message-list.css';

class MessageList extends Component {
    componentWillUpdate(prevProps, prevState) {
        console.log('sdfsdf');
    }

    renderMessageListItems() {
        const { messages, selectedId } = this.props;
        const elements = Object.entries( messages ).map( ([i, item]) =>  {
            const active = selectedId === item.id;
            return (
                <MessageListItem
                    key={i} 
                    feedItem={item} 
                    active={active}
                /> 
            );
        });

        return elements;
    }
    
    render() {
        return (
            <Card className='message-list' fluid>
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