import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import '../styles/Settings.css';
import { useHistory } from 'react-router-dom';

const back = <FontAwesomeIcon icon={faArrowAltCircleLeft} />
const save = <FontAwesomeIcon icon={faCheckCircle} />

const Settings = () => {

    const history = useHistory();

    const handleBackBtn = () => history.push({pathname: '/'});

    return (
        <div className="settings">
            <h2>Settings</h2>
            <div>
                <button onClick={handleBackBtn}>{back}</button>
                <button>{save}</button>
            </div>
        </div>
    )

}

export default Settings;