import React from 'react';
import { Container, Header, Icon, Image } from 'semantic-ui-react';

import './Contact.scss';
import ConnectedLearning from '../../assets/connected-learning.png';

const Contact = () => {
    return (
        <Container className='Contact' fluid>          
          <Header as='h1' icon>
            <Header.Content className='Contact__Header'>
            <Icon 
              name='mail outline'
              size='massive'
              className="Contact__OrangeIcon"
              />
              Contact Us
              </Header.Content>
          </Header>
          <Header.Content className='Contact__Paragraph'>
              For support enquiries or if you wish to delete your account, please contact us via email by clicking <a href="mailto:info@maslaha.org?Subject=Connected%20Learning%20Support%20Request">here</a>.
          </Header.Content>
          <Image src={ConnectedLearning} alt = 'colour-pencils' className='Contact__ColourPencil'/>
{/*           <Header>
            <Header.Content className='Contact__Header'>
              No internet? No problem!
            </Header.Content>
          </Header>
          <Header.Content className='Contact__Subheader'>
              If you need support without internet, please submit your query via SMS to: XXXXXXXXX
          </Header.Content> */}
        </Container>
    )
};

export default Contact;