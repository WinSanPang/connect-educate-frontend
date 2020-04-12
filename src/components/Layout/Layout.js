import React from 'react';

import Aux from '../../hoc/Aux';
import NavigationMenu from '../Navigation/NavigationMenu/NavigationMenu';
import Footer from '../Navigation/NavigationMenu/Footer/Footer';

const layout = ( props ) => (
  <Aux>
    <NavigationMenu/>
    <main>
      {props.children}
    </main>
    <Footer/>
  </Aux>
);

export default layout;