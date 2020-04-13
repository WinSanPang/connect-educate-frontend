
import React, { Component } from 'react';
import { Label } from 'semantic-ui-react';
import './tags.css';

class Tags extends Component {

    renderTags() {
        // const { tags } = this.props;
        const tags = ['Language', 'Subject'];
        const elements = Object.entries( tags ).map( ([id, item]) =>  {
            return <Label key={id} size={'large'}>{item}</Label>
        });

        return elements;
    }


    render() {
        return ( this.renderTags() );
    } 
}

export default Tags;