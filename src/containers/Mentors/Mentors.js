import React, { Component } from 'react';
import { Header, Button, Container } from 'semantic-ui-react';

import Aux from '../../hoc/Aux';

export class Mentors extends Component {

  render() {

    return (
      <Aux>
        <Header 
          as='h1'
          textAlign='center'>
            Mentors
        </Header>
      </Aux>
    );
  }
}

//Not currently used