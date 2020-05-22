import React from 'react';
import { Container, Header } from 'semantic-ui-react';

import './SaferSpacePolicy.scss';

const saferSpacePolicy = () => {
  return (
    <Container className='SaferSpacePolicy'>
      <Header.Content className='SaferSpacePolicy__Header'>
        Safer Space Policy
      </Header.Content>
      <p className='SaferSpacePolicy__Paragraph'>
        Connected Learning aims to create a respectful, understanding and kind space where people feel comfortable to ask questions and seek guidance and support.
      </p>
      <p className='SaferSpacePolicy__Paragraph'>
        This document is a guideline and will change as we learn and grow. Please let us know if you have any suggestions that would allow you to feel more comfortable using this service.
      </p>
      <p className='SaferSpacePolicy__Paragraph'>
        We are committed to providing a safe and secure online space for everyone involved in Connected Learning. 
        It is therefore important that we have a zero-tolerance policy on any form of harassment. 
        In order to maintain a safe space for everyone using Connected Learning we require that everyone in the community follows these guidelines.
      </p>
      <p className='SaferSpacePolicy__Paragraph'>
        Harassment includes, but is not limited to:
      </p>
      <p className='SaferSpacePolicy__BulletPoints'>
        <ul>
          <li>Offensive comments related to sex, age, race, culture, gender identity, sexual orientation, political belief, religion, educational level, and socioeconomic or family status.</li>
          <li>Using offensive or hurtful language.</li>
          <li>Sharing of inappropriate or sexual images.</li>
          <li>Threats or bullying.</li>
          <li>Making assumptions about an individual based on perceived characteristics.</li>
        </ul>
      </p>
      <p className='SaferSpacePolicy__Paragraph'>
        In the event of any person engaging in behaviour that is considered harassment, offenders may be removed immediately from the Connected Learning community, with access to their Connected Learning account revoked.
      </p>
    </Container>
  )
}

export default saferSpacePolicy;