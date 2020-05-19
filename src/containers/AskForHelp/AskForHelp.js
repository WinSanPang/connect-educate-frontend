import React, { Component } from 'react';
import { Header, Button, Container } from 'semantic-ui-react';

import './AskForHelp.scss';
import Aux from '../../hoc/Aux';
import AskForHelpHowItWorks from '../../components/AskForHelp/AskForHelpHowItWorks/AskForHelpHowItWorks';
import AskForHelpMentorsList from '../../components/AskForHelp/AskForHelpMentorsList/AskForHelpMentorsList';

export class AskForHelp extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Aux>
        <Header 
          as='h1'
          textAlign='center'
          style={{fontSize:'70px'}}>
            <Header.Content className='AskForHelp__Teal'>
            Get the help you need
            </Header.Content>
        </Header>
        <AskForHelpHowItWorks/>
        <Container textAlign='center' className="AskForHelp">
          <Button.Content 
            content='Request Help'
            size='huge'
            href='/ask-a-question'
            className="AskForHelp__Button"
            active={activeItem === 'request-help'}
            onClick={this.handleItemClick}
            />
        </Container>
        <AskForHelpMentorsList/>
      </Aux>
    );
  }
}