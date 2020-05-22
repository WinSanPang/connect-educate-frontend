import React, { Component } from 'react';
import moment from 'moment';

import { Card, Button } from 'semantic-ui-react';
import './UnassignedMessageListItem.scss';

class UnassignedMessageListItem extends Component {
    static defaultProps = {
        age: 'N/A'
    }

/*     respondHandler = () => {
    
    } */

    render(){
        const { header, createdDate, age, skill, language, content } = this.props;

        return (    
            <Card className='UnassignedMessageListItem__Card'>
                <Card.Content className='UnassignedMessageListItem__CardContent'>
                    <Card.Header className='UnassignedMessageListItem__CardHeader'>Request Number: {header}</Card.Header>
                      <Card.Header className='UnassignedMessageListItem__CardHeader'>Query: English</Card.Header>
                        <Card.Meta className='UnassignedMessageListItem__CardHeader'>{createdDate}</Card.Meta>
                        <Card.Content extra>Child's Age: {age}</Card.Content>
                        <Card.Content extra>Subject Help Needed: {skill}</Card.Content>
                        <Card.Content extra>Preferred Language: {language}</Card.Content>
                        <Card.Content extra>English Proficiency: Conversational</Card.Content>
                    <Card.Description>
                        {content}
                    </Card.Description>
                    <Button className='UnassignedMessageListItem__Button' floated='right' /* onClick={this.respondHandler} */>Respond</Button>
                </Card.Content>
            </Card>
        )
    }
}

export default UnassignedMessageListItem;