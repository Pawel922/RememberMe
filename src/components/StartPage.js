import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useRef } from 'react';

import '../styles/StartPage.css';

const StartPage = () => {

    const[numOfPeopleToGuess, setNumOfPeopleToGuess] = useState(5);
    const easyBtnRef = useRef();
    const mediumBtnRef = useRef();
    const hardBtnRef = useRef();
    const difficultyBtnRefList = [easyBtnRef,mediumBtnRef,hardBtnRef];
    const history = useHistory();

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

    const runGreetings = () => {
        const location = {
            pathname: `/greetings/${numOfPeopleToGuess}`,
        }
        history.push(location);
    }

    return (
        <div className="startPage">
            <div className="description">
                <p>Try to imagine, that you are at the big party. Because of your famous a lot of people want to know you. Are you able to remember their names? Let's check it!</p>
            </div>
            <div className="buttons">
                <section>
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
                </section>
                <button onClick={runGreetings}>Start</button>
            </div>
        </div>
    )
}

export default StartPage;