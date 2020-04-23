import React, { Component } from 'react';
import { Header, Image, Button, Container, Grid, Segment, Dropdown } from 'semantic-ui-react';

import Aux from '../../../hoc/Aux';
import Mentor1 from '../../../assets/mentor1.png';

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
        <Header 
          as='h1'
          textAlign='center'
          style={{fontSize:'50px', marginBottom: '3%'}}>
            Our Mentors
        </Header>
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
          <Grid columns={2}>
            <Grid.Column>
              <Segment className='AskForHelpMentorsList__Card'>
                <Image
                  size='small'
                  circular
                  floated='left'
                  src={Mentor1}
                  />
                <Container>
                  <Header size='medium'>Win San Pang</Header>
                  <p>Hi - my name is Win and I'm a Junior Frontend Engineer. I'm a first generation British-born Chinese, with my family originating from Hong Kong, so growing up I knew all about the struggles of doing homework by myself whilst my parents, who spoke little English, weren't really able to help, so I'd love to offer support to anyone who needs it. Feel free to drop me a message and I'll do what I can!</p>
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
                  <Button>廣東話</Button>
                  <Button
                    content='Maths'
                    icon='percent'/>
                  <Button
                    content='Tech'
                    icon='computer'/>
                </Container>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Image
                  size='small'
                  circular
                  floated='left'
                  src='https://image.flaticon.com/icons/svg/194/194938.svg'
                  />
                <Container>
                  <Header size='medium'>Mentor 2</Header>
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
                  <Button>ਪੰਜਾਬੀ</Button>
                  <Button
                    content='Science'
                    icon='flask'/>
                  <Button
                    content='Tech'
                    icon='computer'/>
                </Container>
              </Segment>
            </Grid.Column>
          </Grid>
          <Grid columns={2}>
            <Grid.Column>
              <Segment>
                <Image
                  size='small'
                  circular
                  floated='left'
                  src='https://image.flaticon.com/icons/svg/194/194935.svg'
                  />
                <Container>
                  <Header size='medium'>Mentor 3</Header>
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
                  <Button>Magyar</Button>
                  <Button>Deutsche</Button>
                  <Button
                    content='Tech'
                    icon='computer'/>
                  <Button
                    content='Music'
                    icon='music'/>
                </Container>
              </Segment>
            </Grid.Column>
            <Grid.Column>
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
            </Grid.Column>
          </Grid>
        </Container>
      </Aux>
    );
  }
}

export default MentorsList;