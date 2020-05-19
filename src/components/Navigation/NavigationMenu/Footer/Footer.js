import React from 'react';
import { Image } from 'semantic-ui-react';

import './Footer.scss';
import Maslaha from '../../../../assets/maslaha.png';

const footer = (props) => {
    if (props.hideFooter) {
      return null;
    }

    return (
      <div className='Footer'>
        <p className='Footer__Paragraph'>Connected Learning is created by...</p>
        <Image src={Maslaha} floated='right' size='medium'/>
      </div>
    )
  };

export default footer;