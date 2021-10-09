import React, { useContext, useState } from 'react';
import { MainContext } from './MainContext';

import Question from './Question';

const Form = () => {

    const {guests} = useContext(MainContext);
    const [answers, setAnswers] = useState(new Array(guests.length).fill(''));
    const [index, setIndex] = useState(0);

    const goBack = (answer) => {
        updateAnswer(answer);
        setIndex(prevValue => prevValue - 1);
    };
    const goForward = (answer) => {
        updateAnswer(answer);
        setIndex(prevValue => prevValue + 1);
    }

    const updateAnswer = (answer) => {
        let currentAnswers = [...answers];
        currentAnswers[index] = answer;
        setAnswers(currentAnswers);
    }

    return (
        <div>
            <Question answer={answers[index]} goBack={goBack} goForward={goForward} guest={guests[index]}/>
        </div>
    )
}

export default Form;