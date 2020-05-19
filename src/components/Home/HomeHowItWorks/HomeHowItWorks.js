import React from 'react';
import { Container, Header, Grid, Icon } from 'semantic-ui-react';

import './HomeHowItWorks.scss';

const homeHowItWorksStyling = {marginTop: '5%', color: 'black'};

const HomeHowItWorks = () => (
  <Container textAlign='center' style={{margin: '5%'}}>
    <Header.Content className="Home__Subheading">
        How it Works
    </Header.Content>
    <Grid columns={3}>
      <Grid.Row>
        <Grid.Column>
          <Header as='h2' icon className="Home__Teal">
            <Icon 
              name='address card'
              size='massive'
              className="Home__Orange"/>
                Browse our Mentors
            <Header.Subheader style={homeHowItWorksStyling}>
              We have a range of volunteer mentors who we hope can help with with any request you have about supporting your child's learning - this includes teachers, other parents, tech experts and people who do communities and education work!
            </Header.Subheader>
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Header as='h2' icon  className="Home__Teal">
            <Icon
            name='envelope'
            size='massive' 
            className="Home__Orange"/>
              Send a Help Request
            <Header.Subheader style={homeHowItWorksStyling}>
            Send us a message about what you would like help with. This can be in English or in any other language that you can see listed on the language options.
            </Header.Subheader>
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Header as='h2' icon className="Home__Teal">
            <Icon 
              name='comments'
              size='massive'
              className="Home__Orange"/>
                Connected Learning
            <Header.Subheader style={homeHowItWorksStyling}>
            Our volunteer mentors can hopefully help with your request by sharing resources, advice and having a chat!
            </Header.Subheader>
          </Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

export default HomeHowItWorks;