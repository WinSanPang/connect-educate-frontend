import React from 'react';
import { Container, Header, Grid, Icon } from 'semantic-ui-react';

import './AskForHelpHowItWorks.scss';

const AskForHelpHowItWorks = () => (
  <Container textAlign='center'>
    <Header.Content
      className="AskForHelp__Header">
        How it Works
    </Header.Content>
    <Grid columns={3}>
      <Grid.Row>
        <Grid.Column>
          <Header as='h2' icon className="AskForHelp__Teal">
            <Icon 
              name='address card'
              size='massive'
              className="AskForHelp__Orange"/>
                Browse our Mentors
            <Header.Subheader style={{marginTop: '5%'}}>
              We have a range of volunteer mentors who we hope can help with with any request you have about supporting your child's learning - this includes teachers, other parents, tech experts and people who do communities and education work!
            </Header.Subheader>
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Header as='h2' icon className="AskForHelp__Teal">
            <Icon
            name='envelope'
            size='massive'
            className="AskForHelp__Black"/>
              Send a Help Request
            <Header.Subheader style={{marginTop: '5%'}}>
            Send us a message about what you would like help with. This can be in English or in any other language that you can see listed on the language options.
            </Header.Subheader>
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Header as='h2' icon className="AskForHelp__Teal">
            <Icon 
              name='comments'
              size='massive'
              className="AskForHelp__Teal"/>
                Connected Learning
            <Header.Subheader style={{marginTop: '5%'}}>
            Our volunteer mentors can hopefully help with your request by sharing resources, advice and having a chat!
            </Header.Subheader>
          </Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

export default AskForHelpHowItWorks;