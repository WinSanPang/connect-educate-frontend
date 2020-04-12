import React, { Component } from 'react';

import Aux from 'hoc/Aux';
import UnassignedMessageListItem from 'components/UnassignedMessages/UnassignedMessageListItem';
import './UnassignedMessageList.css';

class UnassignedMessageList extends Component {
    renderUnassignedMessageListItems() {
        const { unassignedMessages } = this.props;
        const elements = Object.entries( unassignedMessages ).map( item =>  <UnassignedMessageListItem key={item.id}/> );

        return elements;
    }
    
    render() {
        return (
          <Aux>
            { this.renderUnassignedMessageListItems() }
        </Aux>
        )
    }
}

export default UnassignedMessageList;