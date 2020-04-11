import React, { Component } from 'react';
import { Container, Image, Button } from 'semantic-ui-react';

export class HomeHeader extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Container
          textAlign='center'
          >
          <Image 
            src='https://cms-tc.pbskids.org/parents/articles/Connecting-with-Kids-Through-Art.jpg?mtime=20181203085214' 
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
        
      </div>
    );
  }
}

