import React from 'react';
import { Container, Header } from 'semantic-ui-react';

import './Contact.css';

const Contact = () => {
    return (
        <Container className='Contact' fluid>
          <Header>
            <Header.Content className='Contact__Header'>
              Contact Us
            </Header.Content>
          </Header>
          <Header.Content className='Contact__Subheader'>
              For support enquiries, please contact us via support@connectedlearning.com
          </Header.Content>
          <Header>
            <Header.Content className='Contact__Header'>
              No internet? No problem!
            </Header.Content>
          </Header>
          <Header.Content className='Contact__Subheader'>
              If you need support without internet, please submit your query via SMS to: XXXXXXXXX
          </Header.Content>
        </Container>
    )
};

export default Contact;