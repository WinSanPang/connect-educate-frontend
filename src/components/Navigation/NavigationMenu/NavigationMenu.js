import React, { Component } from 'react';
import { isUserLoggedIn } from 'helpers';
import { connect } from 'react-redux';
import { userRemoveLogin } from 'actions';
import { Menu, Image } from 'semantic-ui-react';

import './NavigationMenu.css';
import Logo from '../../../assets/logo-small.png';

class NavigationMenu extends Component {
  state = {};

  componentDidMount() {
    if (isUserLoggedIn()) {
      this.setState({ loggedIn: true })
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleLogoutClick(e, args) {
    if (isUserLoggedIn()) {
      const { userRemoveLogin } = this.props;
      userRemoveLogin()
    }

    this.handleItemClick(e, args);
  }

  render() {
    const { activeItem, loggedIn } = this.state

    console.log(this.props);

    return (
      <div className='NavigationMenu'>
        <Menu 
          stackable 
          size='huge'
          borderless
          href='/'
          >
          <Menu.Item>
            <Image src={Logo}/>
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
            onClick={this.handleLogoutClick.bind(this)}
            href='/login'
          >
            { loggedIn ? 'Logout' : 'Login' } 
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

const mapDispatchToProps = ( dispatch ) => ({
	userRemoveLogin: () => {
		dispatch( userRemoveLogin() );
	},
});

export default connect( null, mapDispatchToProps )( NavigationMenu );
