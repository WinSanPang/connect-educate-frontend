import React, { Component } from 'react';
import { Header, Grid, Container, Card, Feed } from 'semantic-ui-react';

import Aux from 'hoc/Aux';
import UnassignedMessageListItem from 'components/UnassignedMessages/UnassignedMessageListItem';
import './UnassignedMessageList.css';

class UnassignedMessageList extends Component {
    renderUnassignedMessageListItems() {
        const { messages } = this.props;
        const elements = Object.entries( messages ).map( item =>  <UnassignedMessageListItem key={item.id}/> );

        return elements;
    }
    
    render() {
        return (
          <Aux>
          <Header>Unassigned Messages</Header>
          <Container className='UnassignedMessageList' fluid>
          <Card>
              <Card.Content>
                  { this.renderUnassignedMessageListItems() }
              </Card.Content>
          </Card>
      </Container>
      </Aux>
        )
    }
}

export default UnassignedMessageList;