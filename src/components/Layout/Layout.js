import React from 'react';

import Aux from '../../hoc/Aux';
import NavigationMenu from '../Navigation/NavigationMenu';

const layout = ( props ) => (
  <Aux>
    <NavigationMenu/>
    <main>
      {props.children}
    </main>
  </Aux>
);

export default layout;