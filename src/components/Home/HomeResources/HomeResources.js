import React from 'react';
import { Container, Header, Grid, Icon, Image } from 'semantic-ui-react';

import JigsawTwo from '../../../assets/jigsaw-2-small.png';
import Flower from '../../../assets/flower-small.png';

const HomeResources = () => (
  <Container textAlign='center'>
    <Header 
      as='h1'
      style={{
        margin: '5%',
        fontSize: '50px'
        }}>
        Popular Resources
        <Header.Subheader>
          We know it can be hard to know what activities or learning materials to use with your child, so we've listed a few to help get you started. See our Resources page <a href='/resources'>here</a> for the full list! 
        </Header.Subheader>
    </Header>
    <Grid columns={3}>
      <Grid.Row>
        <Grid.Column>
          <Image
            src={Flower}
            style={{
              textAlign: 'center',
              display: 'inline'
            }}
          />
          <Header as='h2' icon>
            Fun Activities
            <Header.Subheader style={{marginTop: '5%'}}>
              Not sure how to keep your little one entertained? Click <a href='https://bradford.50thingstodo.org/app/os#!/50-things-to-do-before-youre-five'>here</a> for a list of 50 activities to do with children under 5
            </Header.Subheader>
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Image 
            src={JigsawTwo}
            style={{
              textAlign: 'center',
              display: 'inline'
            }}
            />
          <Header as='h2' icon>
              Resource 2
            <Header.Subheader style={{marginTop: '5%'}}>
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
            <Header.Subheader style={{marginTop: '5%'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula nec sem eget fringilla. Aliquam non lacus sed lacus vulputate mattis et aliquet nunc.
            </Header.Subheader>
          </Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

export default HomeResources;