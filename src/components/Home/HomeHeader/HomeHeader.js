import React, { Component } from 'react';
import { Container, Image, Button } from 'semantic-ui-react';

import HeaderImage from 'assets/header.png';

export class HomeHeader extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <Container
          textAlign='center'
          >
          <Image 
            src={HeaderImage}
            fluid
            />
          <p>
            Connected Learning is an online platform for parents and carers to get one-to-one advice to support their child’s learning at home.
          </p> 
          <p>
            With schools closed, being in charge of your child’s education can feel overwhelming! Through Connected Learning we invite parents and carers to ask any questions that might help you support your child’s learning and wellbeing during this time. 
          </p>
          <p>
            Volunteer mentors include teachers, wellbeing and tech experts and other parents! Importantly we also offer support in different languages. 
            Parents who don’t have access to the internet can text in support requests - see our contact page <a href='/contact'>here</a> for details.
          </p>
        <Button 
          content='Ask for Help'
          href='/ask-for-help'
          size='huge'
          style={{
            marginRight: '10%',
            marginTop: '2%',
            fontSize: '50px'
            }}
            active={activeItem === 'ask-for-help'}
            onClick={this.handleItemClick}
          />
        <Button 
          content='Offer Help'
          size='huge'
          href='/volunteer-with-us'
          style={{
            marginLeft: '10%',
            marginTop: '2%',
            fontSize: '50px'
            }}
          active={activeItem === 'offer-help'}
          onClick={this.handleItemClick}
          />
        </Container>
    );
  }
}

