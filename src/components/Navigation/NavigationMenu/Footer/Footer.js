import React from 'react';
import { Image } from 'semantic-ui-react';

import './Footer.css';
import RainbowPencils from '../../../../assets/rainbow-pencils-pastel.png';

const footer = () => (
    <div className='Footer'>
      <Image src={RainbowPencils}></Image>
    </div>
);

export default footer;