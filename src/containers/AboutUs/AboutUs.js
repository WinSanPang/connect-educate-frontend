import React, { Component } from 'react';
import { Container, Header, Image, Divider, Button } from 'semantic-ui-react';

import './AboutUs.scss';
import ConnectedLearning from '../../assets/connected-learning.png';
import AboutUsTeam from '../../components/AboutUs/AboutUsTeam/AboutUsTeam';

class AboutUs extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state

  return (
      <Container className='AboutUs'>
        <Header.Content className='AboutUs__Header'>
          About Us
        </Header.Content>
        <Image src={ConnectedLearning} alt='connected-learning-banner' size='huge' centered/>
        <Divider/>
        <Header.Content className='AboutUs__Subheader'>
          Who We Are, What We Do
        </Header.Content>
        <p className='AboutUs__Paragraph'>
        Connected Learning is part of <a href='https://www.maslaha.org/Project/Schools-with-Roots'  target='_blank' rel='noopener noreferrer'>Schools With Roots</a>, a project run by the charity <a href='https://www.maslaha.org/' target='_blank' rel='noopener noreferrer'> Maslaha</a>, to support UK primary schools to develop sustainable practice around engaging with their local communities and families.
        </p>
        <p className='AboutUs__Paragraph'>
        Maslaha is a charity based in London that seeks to change and challenge the conditions that create inequalities for Muslim and other marginalised communities in areas such as education, gender, criminal justice, health, negative media coverage and a continued climate of racism and Islamophobia.
        </p>
        <p className='AboutUs__Paragraph'>
        Connected Learning is an online community that connects parents and carers with one another, as well as with teachers, IT professionals, and those working in wellbeing and mental health. Our mentors speak a range of languages and offer free help and advice on anything from how to use Zoom, ideas for educational games and activities to do at home, translating resources, emotional support, or subject specific help. We aim to create a respectful, understanding and kind space where people feel comfortable to ask questions and seek guidance and support. 
        </p>
        <Divider/>
        <Header.Content className='AboutUs__Subheader'>
          Contribute to Help Us Run
        </Header.Content>
        <p className='AboutUs__Paragraph'>
          Whether your expertise is in education, translation, web development, or UX design, we could always do with an extra pair of helping hands. So feel free to contact us to contribute to Connected Learning - we'd love to hear from you!
        </p>
        <div className='AboutUs__ButtonContainer'>
          <Button.Content 
              content='Contribute'
              href='/contact'
              className="AboutUs__Button"
              active={activeItem === 'ask-for-help'}
              onClick={this.handleItemClick}
              />
          </div>  
        <Divider/>
        <Header.Content className='AboutUs__Subheader'>
          Special thanks to...
        </Header.Content>
        <p className='AboutUs__Paragraph'>
          The Connected Learning website was developed as part of a <a href='https://womendrivendev.org/ukvscovid19' target='_blank' rel='noopener noreferrer'>hackathon</a> to build solutions to problems posed by Covid 19. The team who have worked on the project are:
        </p>
        <AboutUsTeam/>
      </Container>
    )
  }
}

export default AboutUs;