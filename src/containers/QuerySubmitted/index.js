import React from 'react';

import './index.css';

const QuerySubmitted = () => {
    return(
        <div className="query-submitted">
            <h1>Query Submitted</h1>
            <h4 rows="3" >Thank your submitting your query- you are now logged in. 
            <br/> You will get emailed when a mentor has responded to you
            </h4>
            <a role="button" href="/messages" class="c-btn">View Requests</a>
        </div>
    )
}

export default QuerySubmitted