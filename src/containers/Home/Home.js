import React, { Component } from 'react';
import { Container, Header, Image, Menu, Button } from 'semantic-ui-react';

import Layout from '../../components/Layout/Layout';
import { HomeHeader } from '../../components/Home/HomeHeader/HomeHeader';

export class Home extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Layout/>
        <HomeHeader/>
      </div>
    );
  }
}

export default Home;

