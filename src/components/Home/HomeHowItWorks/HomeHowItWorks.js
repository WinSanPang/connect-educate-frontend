import React from 'react';
import { Container, Header, Grid, Icon } from 'semantic-ui-react';

const HomeHowItWorks = () => (
  <Container textAlign='center'>
    <Header 
      as='h1'
      style={{
        margin: '5%',
        fontSize: '50px'
        }}>
        How it Works
    </Header>
    <Grid columns={3}>
      <Grid.Row>
        <Grid.Column>
          <Header as='h2' icon>
            <Icon 
              name='address card'
              size='massive'/>
                Browse our Mentors
            <Header.Subheader>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula nec sem eget fringilla. Aliquam non lacus sed lacus vulputate mattis et aliquet nunc.
            </Header.Subheader>
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Header as='h2' icon>
            <Icon
            name='envelope'
            size='massive'/>
              Send a Help Request
            <Header.Subheader>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula nec sem eget fringilla. Aliquam non lacus sed lacus vulputate mattis et aliquet nunc.
            </Header.Subheader>
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Header as='h2' icon>
            <Icon 
              name='comments'
              size='massive'/>
                Connect and Learn
            <Header.Subheader>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula nec sem eget fringilla. Aliquam non lacus sed lacus vulputate mattis et aliquet nunc.
            </Header.Subheader>
          </Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

export default HomeHowItWorks;