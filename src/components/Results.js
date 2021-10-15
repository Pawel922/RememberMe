import React, { useContext, useEffect, useState } from 'react';
import { MainContext } from './MainContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrownOpen, faGrin, faRedoAlt } from '@fortawesome/free-solid-svg-icons';

import { useHistory } from 'react-router-dom';
import '../styles/Results.css';

const badAnswersIcon = <FontAwesomeIcon icon={faFrownOpen}/>
const goodAnswersIcon = <FontAwesomeIcon icon={faGrin}/>
const tryAgain = <FontAwesomeIcon icon={faRedoAlt}/>

const Results = (props) => {

    const answers  = props.location.state;
    const [badAnswersScore, setBadAnswersScore] = useState(0);
    const [goodAnswersScore, setGoodAnswersScore] = useState(0);
    const { guests } = useContext(MainContext);
    const history = useHistory();

    const showResults = () => {       
        let color = '';
        return guests.map((guest,index) => {
            guest.name.first === answers[index]
            ? color = 'yellowgreen'
            : color = 'tomato'
            const borderColor = {borderColor: `${color}`};
            return (
                <li key={index}>
                    <img alt='face' src={guest.picture.medium} style={borderColor}/>
                    <p>{guest.name.first}</p>
                    <p>{answers[index]}</p>
                </li>
            )
        })
    }


    const countScores = () => {
        let badAnswers = 0;
        let goodAnswers = 0;
        guests.map((guest,index) => (guest.name.first === answers[index]? goodAnswers += 1: badAnswers += 1))
        setBadAnswersScore(badAnswers);
        setGoodAnswersScore(goodAnswers);
    }


    const handleTryAgainBtn = () => {
        history.push({
            pathname: '/',
        })
    }

    useEffect(() => {
        countScores()
    },[]);

    return (
        <div className="results">
            <div className="summary">
                <div>
                    <p>{badAnswersIcon}</p>
                    <p>{badAnswersScore}</p>
                </div>
                <div>
                    <p>{goodAnswersIcon}</p>
                    <p>{goodAnswersScore}</p>
                </div>
            </div>
            <ul className="answers">
                {showResults()}
            </ul>
            <button onClick={handleTryAgainBtn}>{tryAgain}</button>
        </div>
    )

}

export default Results;