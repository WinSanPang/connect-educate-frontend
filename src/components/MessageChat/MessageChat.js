import React, { Component } from 'react';
import { Card, Form, TextArea } from 'semantic-ui-react';

import Bubble from './Bubble';
import Tags from './Tags';
import './message-chat.scss';

class MessageChat extends Component {
    renderBubbles() {
        const { selectedMessage } = this.props;
        console.log(this.props);
        const { messages } = selectedMessage;

        console.log(messages);
        const elements = Object.entries( messages ).map( ([i, item]) =>  {
            return (
                <Bubble key={i} message={item}/> 
            );
        });

        return elements;
    }

    render() {
        return (
            <Card fluid>
                <Card.Content className="chat__tags">
                    {/* TODO: Add Tags depending on what's returned from API */}
                    <Tags/>
                </Card.Content>
                <Card.Content>
                    <div className="chat__output">
                        {this.renderBubbles()}
                    </div>
                </Card.Content>
                <Card.Content className='chat__input'>
                    <Form>
                        <Form.Group>
                            <Form.Field
                                id='chat-input'
                                control={TextArea}
                                rows={2}
                                className='chat__textarea'
                                name='chat-input'
                                width={16}
                                placeholder='Reply...'
                            />
                            <Form.Button primary content='Send' />
                        </Form.Group>
                    </Form>
                </Card.Content>
            </Card>
        )
    }
}

export default MessageChat;