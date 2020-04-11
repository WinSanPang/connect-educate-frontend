import React, { Component } from 'react';
import { Menu, Image } from 'semantic-ui-react';

import Logo from '../../assets/logo-small.png';

export default class NavigationMenu extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu 
        stackable 
        size='huge'
        borderless>
          <Menu.Item>
            <Image src={Logo}/>
          </Menu.Item>

          <Menu.Item
            name='Mentors'
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
          >
            Resources
          </Menu.Item>

          <Menu.Item
            name='FAQ'
            active={activeItem === 'faq'}
            onClick={this.handleItemClick}
          >
            FAQ
          </Menu.Item>

          <Menu.Item
            name='Contact'
            active={activeItem === 'contact'}
            onClick={this.handleItemClick}
          >
            Contact
          </Menu.Item>
        </Menu>
    )
  }
}
