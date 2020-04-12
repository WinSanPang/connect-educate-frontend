import React, { Component } from 'react';
import moment from 'moment';

import { Feed } from 'semantic-ui-react';
import './message-item.css';

class MessageListItem extends Component {
    render() {
        const feedDate = moment(Date.now());

        return (
            <Feed.Event className="message-item__event">
                <Feed.Content className="message-item__content">
                    <Feed.Summary className="message-item__summary">
                        Chocolate Cakes
                        {/* <Feed.User> to do the event to click the person  */}
                        <Feed.Date>{feedDate.format('DD MMM')}</Feed.Date>
                    </Feed.Summary>
                    <Feed.Extra text>
                        I'm a Card Message List Item
                    </Feed.Extra>
                    <Feed.Meta>

                    </Feed.Meta>
                    
                </Feed.Content>
            </Feed.Event>
        )
    }
}

export default MessageListItem;