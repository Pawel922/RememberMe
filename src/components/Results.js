import React, { useContext } from 'react';
import { MainContext } from './MainContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';

import { useHistory } from 'react-router-dom';
import '../styles/Results.css';

const tryAgain = <FontAwesomeIcon icon={faRedoAlt}/>

const Results = (props) => {

    const answers  = props.location.state;
    const { guests } = useContext(MainContext);
    const history = useHistory();

    const showResults = () => {
        return guests.map((guest,index) => {
            const color = guest.name.first === answers[index]? 'yellowgreen': 'tomato';
            const borderColor = {borderColor: `${color}`};
            const pictureSrc = guests.length === 5 
            ? guest.picture.medium 
            : guest.picture.thumbnail
            return (
                <div key={index}>
                    <img alt='face' src={pictureSrc} style={borderColor}/>
                    <p>{guest.name.first}</p>
                    <p>{answers[index]}</p>
                </div>
            )}
        )
    }

    const handleTryAgainBtn = () => {
        history.push({
            pathname: '/',
        })
    }


    return (
        <div className="results">
            <div className="answers">
                {showResults()}
            </div>
            <button onClick={handleTryAgainBtn}>{tryAgain}</button>
        </div>
    )

}

export default Results;