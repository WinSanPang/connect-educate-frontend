import React, { Component } from 'react';
import { Header, Image, Button, Container, Grid, Segment, Dropdown } from 'semantic-ui-react';

import './AskForHelpMentorsList.scss';
import Aux from '../../../hoc/Aux';

/* const skills = [
  { key: 'art', text: 'Art', value: 'art' },
  { key: 'maths', text: 'Maths', value: 'maths' },
  { key: 'music', text: 'Music', value: 'music' },
  { key: 'science', text: 'Science', value: 'science' },
  { key: 'technology', text: 'Technology', value: 'technology' },
]

const languages = [
  { key: 'english', text: 'English', value: 'english' },
  { key: 'cantonese', text: '廣東話', value: 'cantonese' },
  { key: 'german', text: 'Deutsche', value: 'german' },
  { key: 'hungarian', text: 'Magyar', value: 'hungarian' },
  { key: 'polish', text: 'Polskie', value: 'polish' },
  { key: 'punjabi', text: 'ਪੰਜਾਬੀ', value: 'punjabi' },
  { key: 'urdu', text: 'اردو', value: 'urdu' },
] */

export class MentorsList extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Aux>
        <Header.Content
          className="AskForHelpMentors__Header">
            Our Mentors
        </Header.Content>
        {/* <Container
          style={{marginBottom: '2%'}}>
            <Header>
              Filter by:
            </Header>
            <Dropdown 
              placeholder='Skills' 
              multiple 
              selection 
              options={skills} 
              style={{marginRight: '2%'}}
              />
            <Dropdown 
              placeholder='Languages' 
              multiple 
              selection 
              options={languages} 
              />
        </Container> */}
        <Container>
          <Grid stackable columns={2}>
            <Grid.Row stretched>
            <Grid.Column>
              <Segment className='AskForHelpMentorsList__Card'>
                <Image
                  size='small'
                  circular
                  floated='left'
                  src='https://image.flaticon.com/icons/svg/219/219971.svg'
                  />
                  <Image 
                    size='tiny'
                    floated='right'
                    src='https://image.flaticon.com/icons/svg/321/321260.svg'/>
                <Container>
                  <Header size='medium'>Maria Escudero</Header>
                  <br/>
                  <p>
                    My name is Maria Escudero, I am from Spain but I have lived in London for 30 years and taught in inner city primary schools in Hackney and Newham for 27 years. 
                    After having had many different roles in primary schools, I have been working as a specialist teacher in Spanish for the past 6 years at Sandringham Primary School in Newham.
                  </p>
                  <p>
                    I am able to support with Spanish learning from early years to A levels. 
                    I can advise on YouTube links (mainly for songs and stories), grammar, vocabulary, pronunciation, or for more advanced learners, writing - including editing pieces for assignments.
                  </p>
                  <br/>
                </Container>  
                <Container textAlign='center'>
                  <Header 
                    size='small'
                    style={{
                      marginTop: '1%',
                      marginBottom: '1%'
                    }}
                    >Skills:</Header>
                    <br/>
                  <Button className='AskForHelpMentors__Button'>Español</Button>
                  <Button className='AskForHelpMentors__Button'>Spanish Language Learning</Button>
                  <Button className='AskForHelpMentors__Button'>Primary Education</Button>
                </Container>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Image
                  size='small'
                  circular
                  floated='left'
                  src='https://image.flaticon.com/icons/svg/194/194936.svg'/>
                <Image 
                  size='tiny'
                  floated='right'
                  src='https://image.flaticon.com/icons/svg/321/321233.svg'/>
                <Image 
                  size='tiny'
                  floated='right'
                  src='https://image.flaticon.com/icons/svg/630/630681.svg'/>
                <Container>
                  <Header size='medium'>Alaa Alsaraji</Header>
                  <br/>
                  <p>
                    Hi, my name is Alaa Alsaraji and I am a project manager at the charity Maslaha and a freelance visual artist. 
                  </p>
                  <p>
                    I’m originally from Iraq, but grew up in Iran and Austria, so I can help in multiple languages. 
                    I always help my team at work with IT issues, and happy to help out parents with any issues you might have. 
                  </p>
                  <br/>
                </Container>  
                <Container textAlign='center'>
                  <br/>
                  <Header 
                    size='small'
                    style={{
                      marginTop: '1%',
                      marginBottom: '1%'
                    }}
                    >Skills:</Header>
                  <br/>
                  <Button className='AskForHelpMentors__Button'>Deutsche</Button>
                  <Button className='AskForHelpMentors__Button'>English</Button>
                  <Button className='AskForHelpMentors__Button'>عربى</Button>
                  <Button className='AskForHelpMentors__Button'
                    content='Tech'
                    icon='computer'/>
                  <Button className='AskForHelpMentors__Button'>Zoom</Button>
                  <Button className='AskForHelpMentors__Button'>Google Classroom</Button>
                </Container>
              </Segment>
            </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid stackable centered columns={2}>
            <Grid.Column>
              <Segment>
                <Image
                  size='small'
                  circular
                  floated='left'
                  src='https://image.flaticon.com/icons/svg/190/190603.svg'
                  />
                <Image 
                  size='tiny'
                  floated='right'
                  src='https://image.flaticon.com/icons/png/512/630/630699.png'/>
                <Container>
                  <Header size='medium'>Faiza Durrani</Header>
                  <p>
                    My name is Faiza Durrani. I am a Mum of two little boys aged 3 and 7 years old. 
                    My passion is to inspire children for STEM subjects and after finishing my PhD I have been volunteering since 2016 running science clubs at different local libraries in Newham, free for the children aged 5-11years old, working with 70-80 children every week, and funded by Newham council. 
                  </p>
                  <p>
                    I am currently trying to setup an online Science club for all the children whose parents have requested. 
                    In addition, I have volunteered as a Co-opted governor for a local infant school in the Newham. 
                    I am Pakistani by ethnicity and can speak both Urdu and English.  
                  </p>
                  <br/>
                </Container>  
                <Container textAlign='center'>
                  <Header 
                    size='small'
                    style={{
                      marginTop: '1%',
                      marginBottom: '1%'
                    }}
                    >Skills:</Header>
                  <br/>
                  <Button className='AskForHelpMentors__Button'>اردو</Button>  {/* Urdu */}
                  <Button className='AskForHelpMentors__Button'>English</Button>
                  <Button className='AskForHelpMentors__Button'>STEM Subjects</Button>
                  <Button className='AskForHelpMentors__Button'
                    content='Science'
                    icon='flask'/>
                  <Button className='AskForHelpMentors__Button'>Parenting</Button>
                </Container>
              </Segment>
            </Grid.Column>
            {/* <Grid.Column>
              <Segment>
                <Image
                  size='small'
                  circular
                  floated='left'
                  src='https://image.flaticon.com/icons/svg/194/194917.svg'
                  />
                <Container>
                  <Header size='medium'>Mentor 4</Header>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula nec sem eget fringilla. Aliquam non lacus sed lacus vulputate mattis et aliquet nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras condimentum lectus a sapien suscipit dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Container>  
                <Container>
                  <Header 
                    size='small'
                    style={{
                      marginTop: '1%',
                      marginBottom: '1%'
                    }}
                    >Skills:</Header>
                  <br/>
                  <Button>English</Button>
                  <Button>اردو</Button>
                  <Button
                    content='Maths'
                    icon='percent'/>
                  <Button
                    content='Science'
                    icon='flask'/>
                </Container>
              </Segment>
            </Grid.Column> */}
          </Grid>
        </Container>
        <br/>
        <br/>
        <p className='AskForHelpMentors__IconAttributions'>Icons made by Roundicons on www.flaticon.com</p>
        <br/>
      </Aux>
    );
  }
}

export default MentorsList;