import React, { useContext, useEffect, useState, useRef } from 'react';
import { MainContext } from './MainContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Question from './Question';

import '../styles/Form.css';

const back = <FontAwesomeIcon icon={faArrowAltCircleLeft}/>
const check = <FontAwesomeIcon icon={faCheckCircle}/>
const forward = <FontAwesomeIcon icon={faArrowAltCircleRight}/>

const Form = () => {

    const { guests } = useContext(MainContext);
    const [answers, setAnswers] = useState(new Array(guests.length).fill(''));
    const [index, setIndex] = useState(0);
    const backBtnRef = useRef();
    const checkBtn = useRef();
    const forwardBtnRef = useRef();

    const goBack = () => {
        setIndex(prevValue => prevValue - 1);
    };
    const goForward = () => {
        setIndex(prevValue => prevValue + 1);
    }

    const updateAnswer = (answer) => {
        let currentAnswers = [...answers];
        currentAnswers[index] = answer;
        if(currentAnswers.indexOf('') !== -1) {
            checkBtn.current.classList.add('inactive')
            checkBtn.current.disabled = true;
        } else {
            checkBtn.current.classList.remove('inactive')
            checkBtn.current.disabled = false;
        }
        setAnswers(currentAnswers);
    }

    useEffect(() => {
        if(index === 0) {
            backBtnRef.current.classList.add('inactive');
            backBtnRef.current.disabled = true;
        } else if (index === guests.length - 1) {
            forwardBtnRef.current.classList.add('inactive');
            forwardBtnRef.current.disabled = true;
        } else {
            backBtnRef.current.classList.remove('inactive');
            backBtnRef.current.disabled = false;
            forwardBtnRef.current.classList.remove('inactive');
            forwardBtnRef.current.disabled = false;
        }
    },[index]);

    return (
        <div className="form">
            <h2>Nice to see you again!</h2>
            <Question 
                currentAnswer={answers[index]} 
                picture={guests[index].picture.large} 
                updateAnswer={updateAnswer}
            />                       
            <button ref={backBtnRef} onClick={() => goBack()}>{back}</button>
            <button ref={forwardBtnRef} onClick={() => goForward()}>{forward}</button>
            <button className='inactive' disabled={true} ref={checkBtn}>{check}</button>
        </div>
    )
}

export default Form;