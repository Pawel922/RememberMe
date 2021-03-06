import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

import '../styles/StartPage.css';

const settingsBtn = <FontAwesomeIcon icon={faCog}/>

const StartPage = (props) => {

    const[numOfPeopleToGuess, setNumOfPeopleToGuess] = useState(5);
    const easyBtnRef = useRef();
    const mediumBtnRef = useRef();
    const hardBtnRef = useRef();
    const difficultyBtnRefList = [easyBtnRef,mediumBtnRef,hardBtnRef];
    const history = useHistory();
    const time = props.location.state === undefined ? 3000 : props.location.state;

    const chooseDifficulty = (event) => {
        const level = event.target.dataset.difficulty;
        difficultyBtnRefList.forEach(btn => {
            const currentElem = btn.current;
            currentElem.dataset.difficulty === level
                ? currentElem.classList.add('choosen')
                : currentElem.classList.remove('choosen')
        });
        
        switch (level) {
            case 'easy':
                return setNumOfPeopleToGuess(5);
            case 'medium':
                return setNumOfPeopleToGuess(10);
            case 'hard':
                return setNumOfPeopleToGuess(15);
            default:
                return setNumOfPeopleToGuess(5);
        };
    }

    const openSettings = () => history.push({pathname: '/settings'})

    const runGreetings = () => history.push({
        pathname: `/greetings/${numOfPeopleToGuess}`,
        state: time,
    })

    return (
       
        <div className="startPage">
            <div className="description">
                <p>Try to imagine, that you are at the big party. Because of your famous a lot of people want to know you. Are you able to remember their names? Let's check it!</p>
            </div>
            <section className="buttons">
                <div className="firstBtnGroup">
                    <div>
                        <button 
                            className='choosen' 
                            data-difficulty='easy' 
                            onClick={chooseDifficulty} 
                            ref={easyBtnRef}
                        >
                            Easy
                        </button>
                        <p>up to 5</p>
                    </div>
                    <div>
                        <button 
                            data-difficulty='medium' 
                            onClick={chooseDifficulty} 
                            ref={mediumBtnRef}
                        >
                            Medium
                        </button>
                        <p>up to 10</p>
                    </div>                    
                    <div>
                        <button 
                            data-difficulty='hard' 
                            onClick={chooseDifficulty} 
                            ref={hardBtnRef}
                        >
                            Hard
                        </button>
                        <p>up to 15</p>
                    </div>
                </div>
                <div className="secondBtnGroup">
                    <button onClick={openSettings}>{settingsBtn}</button>
                    <button onClick={runGreetings}>Start</button>
                </div>
            </section>
        </div>
    )
}

export default StartPage;