import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const back = <FontAwesomeIcon icon={faArrowAltCircleLeft} />
const forward = <FontAwesomeIcon icon={faArrowAltCircleRight} />

const Question = ({answer, goBack, goForward, guest}) => {

    const [inputText,setInputText] = useState(answer);
    
    const handleOnChange = (event) => setInputText(event.target.value);

    useEffect(() => setInputText(answer),[guest]);

    return (
        <div>
            <h2>Nice to see you again!</h2>
            <img src={guest.picture.large} alt="face"></img>
            <p>Hi!</p>
            <input onChange={handleOnChange} type="text" value={inputText}/>
            <button onClick={() => goBack(inputText)}>{back}</button>
            <button onClick={() => goForward(inputText)}>{forward}</button>
        </div>
    )
}

export default Question;