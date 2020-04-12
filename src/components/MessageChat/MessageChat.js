import React, { Component } from 'react';
import { Card, Form, Input, Button, TextArea } from 'semantic-ui-react';

import Bubble from './Bubble';
import './message-chat.css';

class MessageChat extends Component {
    render() {
        return (
            <Card fluid>
                <Card.Content>
                    
                </Card.Content>
                <Card.Content>
                    <div className="chat__output">
                        <Bubble
                            key={1}
                            from={'user'}
                            content={'content'}
                            created_at={Date.now()}
                        />
                        <Bubble
                            key={2}
                            from={'Mel'}
                            content={'content'}
                            created_at={Date.now()}
                        />
                    </div>
                </Card.Content>
                <Card.Content className='chat__input'>
                    <Form>
                        <Form.Group>
                            <Form.Field
                                id='chat-input'
                                control={TextArea}
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