import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';

import Aux from '../../hoc/Aux';
import Layout from '../../components/Layout/Layout';
import { HomeHeader } from '../../components/Home/HomeHeader/HomeHeader';
import HomeHowItWorks from '../../components/Home/HomeHowItWorks/HomeHowItWorks';
import HomeResources from '../../components/Home/HomeResources/HomeResources';

export class Home extends Component {
  render() {

    return (
      <Aux>
        <Layout/>
        <HomeHeader/>
        <Divider style={{marginTop:'5%'}}></Divider>
        <HomeHowItWorks/>
        <Divider></Divider>
        <HomeResources/>
      </Aux>
    );
  }
}

export default Home;

