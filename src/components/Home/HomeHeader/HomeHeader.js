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
        <Button 
          content='Ask for Help'
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

