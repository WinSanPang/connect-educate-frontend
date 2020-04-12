import React from 'react';
import moment from 'moment';

import './bubble.css';

const Bubble = ( props ) => {
    const {
        content, from, created_at
    } = props;

    const host = from === 'Mel';
    const className = host ? 'bubble bubble--host' : 'bubble';
    const chatDate = moment(created_at);

    return (
		<div className={className}>
            {/* can add label/image here  */}
            <div className='bubble__icon'>
                <span>
                    {from.charAt(0).toUpperCase()}
                </span>
            </div>
			<div className='bubble__content'>
                <div className='bubble__text'>
                    <span>{content}</span>
                </div>
                <div className='bubble__date'>{chatDate.format('DD MMM')}</div>
            </div>
		</div>
	);
}

export default Bubble;
