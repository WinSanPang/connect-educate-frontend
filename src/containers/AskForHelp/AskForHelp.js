import React, { Component } from 'react';
import { Header, Button, Container } from 'semantic-ui-react';

import Aux from '../../hoc/Aux';
import Layout from '../../components/Layout/Layout';
import AskForHelpHowItWorks from '../../components/AskForHelp/AskForHelpHowItWorks/AskForHelpHowItWorks';
import AskForHelpMentorsList from '../../components/AskForHelp/AskForHelpMentorsList/AskForHelpMentorsList';

export class AskForHelp extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Aux>
        <Layout/>
        <Header 
          as='h1'
          textAlign='center'
          style={{fontSize:'70px'}}>
            Get the help you need
        </Header>
        <AskForHelpHowItWorks/>
        <Container textAlign='center'>
          <Button 
            content='Request Help'
            size='huge'
            style={{
              margin: '5%',
              fontSize: '40px',
              }}
              active={activeItem === 'request-help'}
              onClick={this.handleItemClick}
            />
        </Container>
        <AskForHelpMentorsList/>
        {/* <HomeHeader/>
        <Divider style={{marginTop:'5%'}}></Divider>
        <Divider></Divider>
        <HomeResources/> */}
      </Aux>
    );
  }
}