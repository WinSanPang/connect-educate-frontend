import React from 'react';
import { Container, Header, Icon, Image } from 'semantic-ui-react';

import ColourPencils from '../../assets/orange-green-pencils-2.png';

const Signup = ( ) => {
    return (
        <Container className='Contact' fluid>          
          <Header as='h1' icon>
            <Header.Content className='Contact__Header'>
            <Icon 
              name='handshake outline'
              size='massive'
              />
              Become a Mentor!
              </Header.Content>
            </Header>
            <Header.Content className='Contact__Subheader'>
                We're so pleased to hear you want to join us as a Mentor - please send us an email with some information about yourself by clicking <a href="mailto:info@maslaha.org?Subject=Connected%20Learning%20Volunteer%20Signup%20Request">here</a>.
            </Header.Content>
            <Image src={ColourPencils} alt=''/>
          </Container>
    )
};

export default Signup;