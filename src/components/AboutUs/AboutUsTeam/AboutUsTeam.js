import React, { Component } from 'react';
import { Grid, Container, Card, Image} from 'semantic-ui-react';

import './AboutUsTeam.scss';

const aboutUsTeam = () => {
  return (
    <Container centered>
    <Grid stackable columns={4}>
      <Grid.Row>
        <Grid.Column>
          <Card raised>
            <Card.Content>
              <Image src='https://media-exp1.licdn.com/dms/image/C5603AQGekglFn3q38w/profile-displayphoto-shrink_400_400/0?e=1595462400&v=beta&t=VUoHExtM0-VYAKqo7FtfazbCk_4e0_16Q7ab848DOHs' alt='aisha-dsouza' circular size='small' className='AboutUsTeam__Image'/>
              <Card.Header>Aisha D'Souza</Card.Header>
              <Card.Description>
                Full Stack Developer
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card>
            <Card.Content>
              <Image src='https://media-exp1.licdn.com/dms/image/C5603AQFKY1mTqy3PiQ/profile-displayphoto-shrink_400_400/0?e=1595462400&v=beta&t=Iq6z8IDN_pX6bdrgen_VLqViiIFwfpw6YlBymSJm5Ts' alt='fiona-mitchell' circular size='small' className='AboutUsTeam__Image'/>
              <Card.Header>Fiona Mitchell</Card.Header>
              <Card.Description>
                Graphic Designer
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card raised>
            <Card.Content>
              <Image src='https://media-exp1.licdn.com/dms/image/C4D03AQFqQiIfgSjUNg/profile-displayphoto-shrink_400_400/0?e=1595462400&v=beta&t=gtPXHuARZ8gj_g3dsSckvlX_OYkT8zWn68QUL-sU0lY' alt='ines-guerrero' circular size='small' className='AboutUsTeam__Image'/>
              <Card.Header>Ines Guerrero</Card.Header>
              <Card.Description>
                Full Stack Developer
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card raised>
            <Card.Content>
              <Image src='https://media-exp1.licdn.com/dms/image/C4D03AQHp6MgYoEJxYw/profile-displayphoto-shrink_400_400/0?e=1595462400&v=beta&t=ZuUz1aLc-AAn4QHeNX2zDGqvfdlFl_LQPmD4Rmt6_X0' alt='melenie-schatynski' circular size='small' className='AboutUsTeam__Image'/>
              <Card.Header>Melenie Schatynski</Card.Header>
              <Card.Description>
                Full Stack Developer
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Card>
            <Card.Content>
              <Image src='https://media-exp1.licdn.com/dms/image/C4D03AQGLZR12yh_niw/profile-displayphoto-shrink_400_400/0?e=1595462400&v=beta&t=ybXvqU4UWgaOPMZunZagMmd9EssslatHH-gGyjXeIVc' alt='michelle-brien' circular size='small' className='AboutUsTeam__Image'/>
              <Card.Header>Michelle Brien</Card.Header>
              <Card.Description>
                Full Stack Developer
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card raised>
            <Card.Content>
              <Image src='https://media-exp1.licdn.com/dms/image/C4E03AQGNl5wG49IJpw/profile-displayphoto-shrink_400_400/0?e=1595462400&v=beta&t=aWnQPFf0jrFh-q8t87hXR49zCCETyJOU6bl8SblUDQ0' alt='mindy-jhakra' circular size='small' className='AboutUsTeam__Image'/>
              <Card.Header>Mindy Jhakra</Card.Header>
              <Card.Description>
              Technology Manager (Organiser)
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card raised>
            <Card.Content>
              <Image src='https://avatars3.githubusercontent.com/u/40759410?s=460&u=56a841fafa38408b407cbbaa1d9043206318447a&v=4' alt='rebecca-fitzsimmons' circular size='small' className='AboutUsTeam__Image'/>
              <Card.Header>Rebecca Fitzsimmons</Card.Header>
              <Card.Description>
                Full Stack Developer
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card>
            <Card.Content>
              <Image src='https://media-exp1.licdn.com/dms/image/C4E03AQGZsL_YqLArxw/profile-displayphoto-shrink_400_400/0?e=1595462400&v=beta&t=Vu0ao6rYtO52LH5yJjeIt1gdQkCLGlsWDtmXgjvxRv4' alt='roshni-mahtani' circular size='small' className='AboutUsTeam__Image'/>
              <Card.Header>Roshni Mahtani</Card.Header>
              <Card.Description>
                UX Designer
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
      </Grid>
      <Grid stackable centered columns={4}>
      <Grid.Row>
        <Grid.Column>
          <Card raised>
            <Card.Content>
              <div className='AboutUsTeam__Centre'>
              <Image src='https://media-exp1.licdn.com/dms/image/C5603AQHyZ84XxEQJ2A/profile-displayphoto-shrink_400_400/0?e=1595462400&v=beta&t=aeZTKorUhrDyhbZJlLqCNncBZThsNLKIIDGXWlkV2n8' alt='sandeep-thandi' circular size='small' className='AboutUsTeam__Image'/>
              <Card.Header style={{fontSize: '18px', fontWeight: '700'}}>Sandeep Thandi</Card.Header>
              <Card.Description style={{color: 'rgba(0,0,0,.68)'}}>
                UX Designer
              </Card.Description>
              </div>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
        <Card raised>
          <Card.Content>
          <div className='AboutUsTeam__Centre'>
            <Image src='https://media-exp1.licdn.com/dms/image/C5603AQEwiOKbpFnK-A/profile-displayphoto-shrink_400_400/0?e=1595462400&v=beta&t=2Ygjxlh--8e5YNGyOyDJ5h8mEsliBfQhKaBs5mDbcfo' alt='winsanpang' circular size='small' className='AboutUsTeam__Image'/>
            <Card.Header style={{fontSize: '18px', fontWeight: '700'}}>Win San Pang</Card.Header>
            <Card.Description style={{color: 'rgba(0,0,0,.68)'}}>
              Frontend Developer
            </Card.Description>
            </div>
          </Card.Content>
        </Card>
      </Grid.Column>
      </Grid.Row>
    </Grid>
    <br/>
    <br/>
    </Container>
  )
}

export default aboutUsTeam;