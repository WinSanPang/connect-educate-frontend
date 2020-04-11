import React from 'react';

import Aux from '../../hoc/Aux';

export class Mentors extends Component {
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

export default Mentors;

