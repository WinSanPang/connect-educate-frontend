
import React, { Component } from 'react';
import { Label } from 'semantic-ui-react';
import './message-chat.css';

class Tags extends Component {

    renderTags() {
        // const { tags } = this.props;
        const tags = ['Language', 'Test'];
        const elements = Object.entries( tags ).map( item =>  {
            return <Label>item</Label>
        });

        return elements;
    }


    render() {
        return ( <div></div> );
    } 
}

export default Tags;