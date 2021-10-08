import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import '../styles/Guest.css';

const Guest = ({num, numPeopleToGuess, person, time}) => {

    const { name, picture } = person;

    const animationVariable = {
        animationDuration: `${time}ms`,
        animationIterationCount: numPeopleToGuess,
    }

    const [welcomeText, setWelcomeText] = useState();
    
    const history = useHistory();

    const randomWelcomeText = (name) => {
        const texts = [
            `Hi, I'am ${name}`,
            `Hello, I'am ${name}`,
            `I'am ${name}, nice to see you!`,
            `Pleased to see you, I'am ${name}`,
            `Welcome to the party, I'am ${name}`,
            `I'am ${name}, nice to meet you!`
        ]
        const randomIndex = (Math.floor(Math.random() * texts.length));
        return texts[randomIndex];
    }

    useEffect(() => 
        { 
            setWelcomeText(randomWelcomeText(name.first));
            if(num === numPeopleToGuess - 1) {
                setTimeout(() => history.push({
                    pathname: '/info',
                    state: {
                        text: 'Are you ready to check your memory?',
                        type: 'info',
                    }
                }),time)
            }
        },[person])

    return (
        <div className="guest">
            <h2>Greetings</h2>
            <p>{`Guest ${num} of ${numPeopleToGuess}`}</p>
            <img src={picture.large} alt="face"></img>
            <p>{welcomeText}</p>
            <div className="progress">
                <p style={animationVariable}></p>
            </div>
        </div>
    )
}

export default Guest