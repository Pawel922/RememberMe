import React, { useEffect, useRef, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

import '../styles/Question.css';

const back = <FontAwesomeIcon icon={faArrowAltCircleLeft} />
const forward = <FontAwesomeIcon icon={faArrowAltCircleRight} />

const Question = ({answer, goBack, goForward, guest, index, numOfPeopleToGuess}) => {

    const [inputText,setInputText] = useState(answer);
    const backBtnRef = useRef();
    const forwardBtnRef = useRef();

    const handleOnChange = (event) => setInputText(event.target.value);

    useEffect(() => {
        setInputText(answer);
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
            <button ref={backBtnRef} onClick={() => goBack(inputText)}>{back}</button>
            <button ref={forwardBtnRef} onClick={() => goForward(inputText)}>{forward}</button>
        </div>
    )
}

export default Question;