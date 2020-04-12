import React from 'react';
import { Header, Button, Container } from 'semantic-ui-react';

const NotFound = ( props ) => {
    return (
        <Container textAlign='center'>
            <Header 
                as='h1'
                style={{fontSize: '50px'}}
                >Page not Found :(</Header>
            <Header.Subheader>Sorry - this page cannot be found. Please click <a href='/'>here</a> to go back to the homepage</Header.Subheader>
        </Container>
    )
};

export default NotFound;