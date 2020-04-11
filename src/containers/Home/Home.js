import React, { Component } from 'react';

import Layout from '../../components/Layout/Layout';
import ButtonTest from '../../components/UI/Button/ButtonTest';

export class Home extends Component {
  render() {
    return (
      <div>
        <Layout/>
        Welcome to Connect &#38; Educate
        <ButtonTest/>
        
      </div>
    );
  }
}

export default Home;

