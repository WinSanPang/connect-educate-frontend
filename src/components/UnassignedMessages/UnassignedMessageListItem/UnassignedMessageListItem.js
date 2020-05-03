import React, { Component } from 'react';
import moment from 'moment';

import { Card, Button } from 'semantic-ui-react';
import './UnassignedMessageListItem.css';

const UnassignedMessageListItem = (props) => {

/*     respondHandler = () => {

    } */

        const feedDate = moment(Date.now());

        return (
            <Card className='UnassignedMessageListItem__Card'>
                <Card.Content className='UnassignedMessageListItem__CardContent'>
                    <Card.Header className='UnassignedMessageListItem__CardHeader'>Sarah</Card.Header>
                      <Card.Header className='UnassignedMessageListItem__CardHeader'>Query: English</Card.Header>
                        <Card.Meta className='UnassignedMessageListItem__CardHeader'>{feedDate.format('DD MMM YYYY')}</Card.Meta>
                        <Card.Content extra>Child's Age: 5</Card.Content>
                        <Card.Content extra>Subject Help Needed: Science</Card.Content>
                        <Card.Content extra>Preferred Language: German</Card.Content>
                        <Card.Content extra>English Proficiency: Conversational</Card.Content>
                    <Card.Description>
                        I have a 5 year old daughter and I don't know how to help her with science homework because my English not very good. Can you help please?
                    </Card.Description>
                    <Button className='UnassignedMessageListItem__Button' floated='right' /* onClick={this.respondHandler} */>Respond</Button>
                </Card.Content>
            </Card>
        )
    }

export default UnassignedMessageListItem;