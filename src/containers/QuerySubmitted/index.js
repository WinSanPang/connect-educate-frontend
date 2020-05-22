import React from 'react';
import { Container, Header, Icon, Button } from 'semantic-ui-react';

import './index.scss';

const QuerySubmitted = () => {
    return (
        <Container className='QuerySubmitted' fluid>          
          <Header as='h1' icon>
            <Icon 
              name='send'
              size='large'
              className="QuerySubmitted__TealIcon"
              />
            <Header.Content className='QuerySubmitted__Header'>
              Query Submitted
              </Header.Content>
          </Header>
          <Header.Content className='QuerySubmitted__Paragraph'>
          Thank your submitting your query - you are now logged in. You will receive an email when a mentor has responded to you.
          </Header.Content>
          <Button.Content 
          content='View Requests'
          href='/messages'
          className="QuerySubmitted__Button"
          />
        </Container>
    )
}

export default QuerySubmitted;