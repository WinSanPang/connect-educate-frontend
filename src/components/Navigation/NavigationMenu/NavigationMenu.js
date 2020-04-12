import React, { Component } from 'react';
import { Menu, Image } from 'semantic-ui-react';

import './NavigationMenu.css';

export default class NavigationMenu extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className='NavigationMenu'>
        <Menu 
          stackable 
          size='huge'
          borderless
          href='/'
          >
          <Menu.Item>
            <Image style={{height:'60px'}} src={process.env.PUBLIC_URL + '/assets/logo.png'}/>
          </Menu.Item>

          <Menu.Item
            name='Mentors'
            href='/our-mentors'
            active={activeItem === 'mentors'}
            onClick={this.handleItemClick}
            position='right'
          >
            Mentors
          </Menu.Item>

          <Menu.Item
            name='Requests'
            active={activeItem === 'requests'}
            onClick={this.handleItemClick}
            href='/resources'
          >
            Resources
          </Menu.Item>

          <Menu.Item
            name='Contact'
            active={activeItem === 'contact'}
            onClick={this.handleItemClick}
            href='/contact'
          >
            Contact
          </Menu.Item>

          <Menu.Item
            name='Login'
            active={activeItem === 'login'}
            onClick={this.handleItemClick}
            href='/login'
          >
            Login
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}
