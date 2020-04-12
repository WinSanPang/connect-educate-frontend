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
              display: 'inline',
              padding: '4%'
            }}
            />
          <Header as='h2' icon>
              Games
            <Header.Subheader style={{marginTop: '5%'}}>
              Click <a href='https://www.bbc.co.uk/bitesize/collections/primary-games/1'>here</a> for a list of games that you and your child could play
            </Header.Subheader>
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Header as='h2' icon>
            <Icon 
              name='book'
              size='massive'
              style={{padding:'10%'}}/>
                Stories
            <Header.Subheader style={{marginTop: '5%'}}>
            For a list of multicultural books, click <a href='https://www.thisisbooklove.com/'>here</a> or find the perfect story in your language <a href='https://stories.audible.com/discovery'>here</a>. You can also discover more reading resources and the philosophy behind children's learning <a href='https://www.janeyates.net/45254287'>here</a>
            </Header.Subheader>
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Header as='h2' icon>
            <Icon 
              name='microphone'
              size='massive'
              style={{padding:'10%'}}/>
            Phonics
            <Header.Subheader style={{marginTop: '5%'}}>
              Want to practice phonics with your child? Click <a href='https://www.youtube.com/channel/UCo7fbLgY2oA_cFCIg9GdxtQ/'>here</a> for some daily phonics lessons 
            </Header.Subheader>
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Header as='h2' icon>
            <Icon 
              name='space shuttle'
              size='massive'
              style={{padding:'10%'}}/>
                Outer Space
            <Header.Subheader style={{marginTop: '5%'}}>
              Let your kid's imagination go out of space with <a href='https://www.nasa.gov/kidsclub/index.html'>NASA's kids club</a>
            </Header.Subheader>
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Header as='h2' icon>
            <Icon 
              name='bicycle'
              size='massive'
              style={{padding:'10%'}}/>
                Exercise
            <Header.Subheader style={{marginTop: '5%'}}>
             Burn some calories with your little one with some <a href='https://www.thebodycoach.com/blog/pe-with-joe-1254.html/'>PE lessons</a> or why not try some <a href='https://www.youtube.com/watch?v=4ZpkRAcgws4/'>Yoga at home</a>
            </Header.Subheader>
          </Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

export default Resources;