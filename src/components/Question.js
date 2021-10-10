import React from 'react';

import '../styles/Question.css';



const Question = ({ currentAnswer, picture, updateAnswer }) => {

    const handleOnChange = (event) => {
        const typedText = event.target.value;
        updateAnswer(typedText);
    }

    return (
        <div className="question">
            <img src={picture} alt="face"></img>
            <p>Your answer:</p>
            <input onChange={handleOnChange} type="text" value={currentAnswer} placeholder='type my name'/>
        </div>
    )
}

export default Question;