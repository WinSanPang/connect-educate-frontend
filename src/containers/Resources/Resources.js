import React from 'react';
import { Container, Header, Grid, Icon, Image } from 'semantic-ui-react';

import JigsawTwo from '../../assets/jigsaw-2-small.png';
import Flower from '../../assets/flower-small.png';

const Resources = () => (
  <Container textAlign='center'>
    <Header 
      as='h1'
      style={{
        margin: '5%',
        fontSize: '50px'
        }}>
        Popular Resources
        <Header.Subheader>
          We know it can be hard to know what activities or learning materials to use with your child, so here's a list to get you inspired
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
              Click <a href='https://bradford.50thingstodo.org/app/os#!/50-things-to-do-before-youre-five'>here</a> for a list of 50 activities for under 5’s that you can easily do around the house.
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
            Click <a href='https://www.bbc.co.uk/bitesize/collections/primary-games/1'>here</a> to play games and practice Maths, English and Science, or let your child’s imagination go outta space with <a href='https://www.nasa.gov/kidsclub/index.html '>Nasa's Kids Club</a>.
            </Header.Subheader>
          </Header>
        </Grid.Column>
        <Grid.Column>
        <Header as='h2' icon>
            <Icon 
              name='microphone'
              size='massive'
              style={{padding:'10%'}}/>
            Phonics
            <Header.Subheader style={{marginTop: '5%'}}>
              Want to practice phonics with your child? Click <a href='https://www.youtube.com/watch?v=lFyDwUKSw7Y&list=PLDe74j1F52zSCiOMSn3zQDSzgu9TrbQ1c/'>here</a> for some daily lessons. 
            </Header.Subheader>
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
        <Header as='h2' icon>
            <Icon 
              name='bicycle'
              size='massive'
              style={{padding:'10%'}}/>
                PE
            <Header.Subheader style={{marginTop: '5%'}}>
             Burn some calories with your little one with <a href='https://www.thebodycoach.com/blog/pe-with-joe-1254.html/'>Joe Wick's PE sessons</a> or try this calming <a href='https://www.youtube.com/watch?v=4ZpkRAcgws4/'>15 minute yoga workout</a> for kids.
            </Header.Subheader>
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Header as='h2' icon>
            <Icon 
              name='book'
              size='massive'
              style={{padding:'10%'}}/>
                Story Time
            <Header.Subheader style={{marginTop: '5%'}}>
              Listen to children’s stories in your own language for free <a href='https://stories.audible.com/discovery'>here</a> or visit <a href='https://www.thisisbooklove.com/'>this bookshop</a> to order a range of multicultural stories.
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
              Having trouble with technology? Click <a href='https://www.youtube.com/watch?v=QOUwumKCW7M'>here</a> for a guide on how to use Zoom or find out how to use Google Classroom <a href='https://www.youtube.com/watch?v=2Iowi-gmbys'>here</a>. Or get in touch with one of our mentors!  
            </Header.Subheader>
          </Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

export default Resources;