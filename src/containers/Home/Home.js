import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';

import Layout from '../../components/Layout/Layout';
import { HomeHeader } from '../../components/Home/HomeHeader/HomeHeader';
import HomeHowItWorks from '../../components/Home/HomeHowItWorks/HomeHowItWorks';
import HomeResources from '../../components/Home/HomeResources/HomeResources';

export class Home extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Layout/>
        <HomeHeader/>
        <Divider style={{marginTop:'5%'}}></Divider>
        <HomeHowItWorks/>
        <Divider></Divider>
        <HomeResources/>
      </div>
    );
  }
}

export default Home;

