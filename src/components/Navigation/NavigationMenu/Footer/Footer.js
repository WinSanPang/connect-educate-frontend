import React from 'react';
import { Image } from 'semantic-ui-react';

import './Footer.css';
import RainbowPencils from '../../../../assets/rainbow-pencils-pastel.png';

const footer = (props) => {
    if (props.hideFooter) {
      return null;
    }

    return (
      <div className='Footer'>
        <Image src={RainbowPencils}></Image>
      </div>
    )
  };

export default footer;