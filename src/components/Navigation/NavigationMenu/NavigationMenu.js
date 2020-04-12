import React, { Component } from 'react';
import { isUserLoggedIn } from 'helpers';
import { connect } from 'react-redux';
import { userRemoveLogin } from 'actions';
import { Menu, Image } from 'semantic-ui-react';

import './NavigationMenu.css';
import Logo from '../../../assets/logo-small.png';

class NavigationMenu extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleLogoutClick(e, args) {
    if (isUserLoggedIn()) {
      const { userRemoveLogin } = this.props;
      userRemoveLogin()
    }

    this.handleItemClick(e, args);
  }

  render() {
    const { activeItem } = this.state
    const { user } = this.props;

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
            { user || isUserLoggedIn() ? 'Logout' : 'Login' } 
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

const mapStateToProps = ( state ) => ({
	user: state.user,
});


export default connect( mapStateToProps, mapDispatchToProps )( NavigationMenu );
