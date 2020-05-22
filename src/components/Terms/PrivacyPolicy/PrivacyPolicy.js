import React from 'react';
import { Container, Header, Divider } from 'semantic-ui-react';

import './PrivacyPolicy.scss';

const privacyPolicy = () => {
  return (
    <Container className='PrivacyPolicy'>
      <Header.Content className='PrivacyPolicy__Header'>
        Privacy Policy
      </Header.Content>
      <br/>
      <Divider/>
      <br/>
      <Header.Content className='PrivacyPolicy__Subheader'>
        Introduction
      </Header.Content>
      <p className='PrivacyPolicy__Paragraph'>
        Maslaha/Connected Learning is committed to protecting and respecting your privacy. 
        This notice explains the types of personal data we collect when you use the Connected Learning website. 
        It also explains how we will store and handle that data and keep it safe.  
      </p>
      <Header.Content className='PrivacyPolicy__Subheader'>
        About Us
      </Header.Content>
      <p className='PrivacyPolicy__Paragraph'>
        We are a charity registered in England under company charity number 1139560 with our registered address as set out below:
        <br/>
        <br/>
        Maslaha, Free Word Centre, 60 Farringdon Road, London, EC1R 3GA.
        <br/>
        <a href="mailto:info@maslaha.org?Subject=Connected%20Learning">info@maslaha.org</a>
      </p>
      <Header.Content className='PrivacyPolicy__Subheader'>
        How do we collect your personal information?
      </Header.Content>
      <p className='PrivacyPolicy__Paragraph'>
        We collect data given to us directly by you when you register as a user or volunteer on the connected learning website. 
      </p>
      <Header.Content className='PrivacyPolicy__Subheader'>
        What information do we collect? 
      </Header.Content>
      <p className='PrivacyPolicy__Paragraph'>
        The data includes your name, email address and phone number, and if you register as a volunteer it may include your profession. 
      </p>
      <Header.Content className='PrivacyPolicy__Subheader'>
        What do we do with your data?
      </Header.Content>
      <p className='PrivacyPolicy__Paragraph'>
        We will only keep your personal data for so long as necessary for the purpose it was collected. 
        At the end of that retention period the data will be deleted or may be anonymised for use in statistical analysis. 
      </p>
      <p className='PrivacyPolicy__Paragraph'>
        We have security processes in place to keep the data transmitted to us via the internet safe. 
      </p>
      <p className='PrivacyPolicy__Paragraph'>
        We will not disclose your personal data to third parties, except where it relates to a legal obligation, for example safeguarding.   
      </p>
      <Header.Content className='PrivacyPolicy__Subheader'>
        Why do we collect this information? 
      </Header.Content>
      <p className='PrivacyPolicy__Paragraph'>
        The main reasons we collect information is to provide a service you as a user/volunteer on the Connected Learning website, and to ensure that we create a safe online community for all users and volunteers. 
      </p>
      <Header.Content className='PrivacyPolicy__Subheader'>
        Legal bases for processing your personal data information do we collect? 
      </Header.Content>
      <p className='PrivacyPolicy__Paragraph'>
        We use the personal data provided for the purpose of membership by you to the Connected Learning community to pursue our legitimate interests. 
      </p>
    </Container>
  )
}

export default privacyPolicy;