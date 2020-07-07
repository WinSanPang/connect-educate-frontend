import React, { Component } from "react";
import { Header, Button, Container } from "semantic-ui-react";

import "./AskForHelp.scss";
import Aux from "../../hoc/Aux";
import AskForHelpHowItWorks from "../../components/AskForHelp/AskForHelpHowItWorks/AskForHelpHowItWorks";
import AskForHelpMentorsList from "../../components/AskForHelp/AskForHelpMentorsList/AskForHelpMentorsList";
import { Link } from "react-router-dom";

export class AskForHelp extends Component {
  render() {
    return (
      <Aux>
        <Header as="h1" textAlign="center">
          <Header.Content className="AskForHelp__Header">
            Get the help you need
          </Header.Content>
        </Header>
        <AskForHelpHowItWorks />
        <Container textAlign="center" className="AskForHelp">
          <Button.Content
            content="Request Help"
            size="huge"
            as={Link}
            to="/ask-a-question"
            className="AskForHelp__Button"
          />
        </Container>
        <AskForHelpMentorsList />
      </Aux>
    );
  }
}
