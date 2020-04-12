
import React, { Component } from 'react';
import { Label } from 'semantic-ui-react';
import './tags.css';

class Tags extends Component {

    renderTags() {
        // const { tags } = this.props;
        const tags = ['Language', 'Test'];
        const elements = Object.entries( tags ).map( item =>  {
            return <Label size={'large'}>item</Label>
        });

        return elements;
    }


    render() {
        return ( this.renderTags() );
    } 
}

export default Tags;