import React, { useContext, useState } from 'react';
import { MainContext } from './MainContext';

import Question from './Question';

const Form = () => {

    const {guests} = useContext(MainContext);
    const [answers, setAnswers] = useState(new Array(guests.length).fill(''));
    const [index, setIndex] = useState(0);

    const goBack = () => {
        setIndex(prevValue => prevValue - 1);
    };
    const goForward = () => {
        setIndex(prevValue => prevValue + 1);
    }

    const updateAnswer = (answer) => {
        let currentAnswers = [...answers];
        currentAnswers[index] = answer;
        setAnswers(currentAnswers);
    }

    return (
        <div>
            <Question 
                answers={answers}
                goBack={goBack} 
                goForward={goForward} 
                guest={guests[index]}
                index={index}
                numOfPeopleToGuess={guests.length}
                updateAnswer={updateAnswer}
            />
        </div>
    )
}

export default Form;