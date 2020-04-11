import React, { useState } from 'react';

function QuestionForm() {
    // Declare a new state variable, which we'll call "count"
    const [addQuestion] = useState(false);

    const questionHeader = () => {
        return(
            <div>hello</div>
        )
    } 

    return (
        <>
        {Boolean(addQuestion) ? <div>Noo</div> : questionHeader()}
        </>
        );
}

export default QuestionForm
