import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faCheckCircle, faStopwatch } from '@fortawesome/free-solid-svg-icons';

import '../styles/Settings.css';
import { useHistory } from 'react-router-dom';

const back = <FontAwesomeIcon icon={faArrowAltCircleLeft} />
const save = <FontAwesomeIcon icon={faCheckCircle} />
const timer = <FontAwesomeIcon icon={faStopwatch}/>

const Settings = () => {

    const history = useHistory();

    const handleBackBtn = () => history.push({pathname: '/'});

    return (
        <div className="settings">
            <h2>Settings</h2>
            <div className="timer">
                <p className="icon">{timer}</p>
                <p className="strip">
                    <p className="indicator"></p>
                    <p>3s</p>
                    <p>5s</p>
                    <p>7s</p>
                </p>
            </div>
            <div>
                <button onClick={handleBackBtn}>{back}</button>
                <button>{save}</button>
            </div>
        </div>
    )

}

export default Settings;