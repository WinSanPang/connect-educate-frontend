import React from 'react';
import { Container, Header, Grid, Icon, Button } from 'semantic-ui-react';

const HomeResources = () => (
  <Container textAlign='center'>
    <Header 
      as='h1'
      style={{
        margin: '5%',
        fontSize: '50px'
        }}>
        Popular Resources
    </Header>
    <Grid columns={3}>
      <Grid.Row>
        <Grid.Column>
          <Header as='h2' icon>
            <Icon 
              name='address card'
              size='massive'/>
                Resource 1
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
              Resource 2
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
                Resource 3
            <Header.Subheader>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula nec sem eget fringilla. Aliquam non lacus sed lacus vulputate mattis et aliquet nunc.
            </Header.Subheader>
          </Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

export default HomeResources;