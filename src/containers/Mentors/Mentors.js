import React, { Component } from 'react';
import { Header, Button, Container } from 'semantic-ui-react';

import Aux from '../../hoc/Aux';
import Layout from '../../components/Layout/Layout';

export class Mentors extends Component {

  render() {

    return (
      <Aux>
        <Layout/>
        <Header 
          as='h1'
          textAlign='center'
          style={{fontSize:'50px'}}>
            Mentors
        </Header>
      </Aux>
    );
  }
}