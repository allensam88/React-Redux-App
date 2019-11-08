import React, { useState } from 'react';
import Answers from './Answers';

const Card = props => {
    const [correctAnswer, setCorrectAnswer] = useState(false);
    
    const answerArray = [...props.data.incorrect_answers, props.data.correct_answer];

    const shuffle = function (array) {
        let currentIndex = array.length;
        let temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };

    const shuffledAnswers = shuffle(answerArray);

    const checkAnswer = (answer) => {
        if (answer === props.data.correct_answer) {
            setCorrectAnswer(true);
        }
    }

    return (
        <div>
            <h3>{props.data.question}</h3>
            {shuffledAnswers.map((item, index) => (<Answers key={index} answer={item} checkAnswer={checkAnswer}/>))}
        </div>
    )
}

export default Card;