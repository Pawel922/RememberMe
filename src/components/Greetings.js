import React from 'react';

const Greetings = (props) => {
    const numPeopleToGuess = props.location.state;
    return (
        <div>
            <p>Greetings</p>
            <p>{numPeopleToGuess}</p>
        </div>
    )
}

export default Greetings;