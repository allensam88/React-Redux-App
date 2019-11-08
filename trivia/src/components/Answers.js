import React from 'react';

const Answers = props => {

    return (
        <div>
            <button onClick={() => props.checkAnswer(props.answer)}>{props.answer}</button>
        </div>
    )
}

export default Answers;