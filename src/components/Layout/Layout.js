import React from 'react';

import Aux from '../../hoc/Aux';
import NavigationMenu from '../Navigation/NavigationMenu/NavigationMenu';
import Footer from '../Navigation/NavigationMenu/Footer/Footer';

import './layout.css';

const layout = ( props ) => {
  const className =  window.location.pathname.replace('/', '');
  const hideFooter = className === 'messages';
  
  return (
    <Aux>
      <NavigationMenu/>
      <main className={className}>
        {props.children}
      </main>
      <Footer hideFooter={hideFooter}/>
    </Aux>
  )
};

export default layout;