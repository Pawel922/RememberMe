import React from 'react';

import '../styles/Guest.css';

const Guest = ({guest, numPeopleToGuess, num, time}) => {
    const { name, picture } = guest;

    const animationVariable = {
        animationDuration: `${time}ms`,
        animationIterationCount: numPeopleToGuess,
    }

    return (
        <div>
            <p>{`${num} of ${numPeopleToGuess}`}</p>
            <p>{`My name is ${name.first}`}</p>
            <img src={picture.large} alt="face"></img>
            <div className="progress">
                <p style={animationVariable}></p>
            </div>
        </div>
    )
}

export default Guest