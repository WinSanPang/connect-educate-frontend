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
          Learn Through Play
            <Header.Subheader style={{marginTop: '5%'}}>
            Click <a href='https://bradford.50thingstodo.org/app/os#!/50-things-to-do-before-youre-five' target='_blank'>here</a> for a list of 50 activities for under 5’s that you can easily do around the house.
            </Header.Subheader>
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Image 
            src={JigsawTwo}
            style={{
              textAlign: 'center',
              display: 'inline',
              padding: '4%'
            }}
            />
          <Header as='h2' icon>
              Games and Discovery
            <Header.Subheader style={{marginTop: '5%'}}>
            Click <a href='https://www.bbc.co.uk/bitesize/collections/primary-games/1' target='_blank'>here</a> to play games and practice Maths, English and Science, or let your child’s imagination go outta space with <a href='https://www.nasa.gov/kidsclub/index.html' target='_blank'>Nasa's Kids Club</a>.
            </Header.Subheader>
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Header as='h2' icon>
            <Icon 
              name='computer'
              size='massive'
              style={{padding:'10%'}}
              />
                Trouble with Tech?
            <Header.Subheader style={{marginTop: '5%'}}>
              Having trouble with technology? Click <a href='https://www.youtube.com/watch?v=QOUwumKCW7M' target='_blank'>here</a> for a guide on how to use Zoom or find out how to use Google Classroom <a href='https://www.youtube.com/watch?v=2Iowi-gmbys' target='_blank'>here</a>. Or get in touch with one of our mentors!
            </Header.Subheader>
          </Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

export default HomeResources;