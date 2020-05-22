import React from 'react';
import { Image } from 'semantic-ui-react';

import './Footer.scss';
import Maslaha from '../../../assets/maslaha-logo-white.png';

const footer = (props) => {
    if (props.hideFooter) {
      return null;
    }

    return (
      <div>
      <div className='Footer'>
        <p className='Footer__Paragraph'>Connected Learning is created by...</p>
        <Image src={Maslaha} floated='right' size='medium'/>
      </div>
      <div className='Footer__Terms'>
        <a href='/terms-conditions'>Terms and Conditions</a>
        <a href='/privacy-policy'>Privacy Policy</a>
        <a href='/safer-space-policy'>Safer Space Policy</a>
      </div>
      </div>
    )
  };

export default footer;