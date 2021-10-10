import React, { useEffect, useRef, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import '../styles/Question.css';

const back = <FontAwesomeIcon icon={faArrowAltCircleLeft} />
const check = <FontAwesomeIcon icon={faCheckCircle}/>
const forward = <FontAwesomeIcon icon={faArrowAltCircleRight} />

const Question = ({answers, goBack, goForward, guest, index, numOfPeopleToGuess, updateAnswer}) => {

    const [inputText,setInputText] = useState(answers[index]);
    const backBtnRef = useRef();
    const checkBtn = useRef();
    const forwardBtnRef = useRef();

    const handleOnChange = (event) => setInputText(event.target.value);

    useEffect(() => {
        setInputText(answers[index]);
        updateAnswer(inputText);
        if(index === 0) {
            backBtnRef.current.classList.add('inactive');
            backBtnRef.current.disabled = true;
        } else if (index === numOfPeopleToGuess - 1) {
            forwardBtnRef.current.classList.add('inactive');
            forwardBtnRef.current.disabled = true;
        } else {
            backBtnRef.current.classList.remove('inactive');
            backBtnRef.current.disabled = false;
            forwardBtnRef.current.classList.remove('inactive');
            forwardBtnRef.current.disabled = false;
        }
    },[guest]);

    return (
        <div className="question">
            <h2>Nice to see you again!</h2>
            <img src={guest.picture.large} alt="face"></img>
            <p>Your answer:</p>
            <input onChange={handleOnChange} type="text" value={inputText} placeholder='type my name'/>
            <button ref={backBtnRef} onClick={() => goBack()}>{back}</button>
            <button ref={forwardBtnRef} onClick={() => goForward()}>{forward}</button>
            <button ref={checkBtn}>{check}</button>
        </div>
    )
}

export default Question;