import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import '../styles/Info.css';
import { useHistory } from 'react-router-dom';


const back = <FontAwesomeIcon icon={faArrowAltCircleLeft} />
const check = <FontAwesomeIcon icon={faCheckCircle} />

const Info = (props) => {

    const {text, type} = props.location.state;
    const history = useHistory();

    const handleBackBtn = () => history.push({pathname: '/'});
    const handleCheckBtn = () => history.push({pathname: '/form'});

    const configureButtons = (type) => {
        if(type === 'info') {
            return (
                <>
                    <button onClick={handleBackBtn}>{back}</button>
                    <button onClick={handleCheckBtn}>{check}</button>
                </>
            )
        } else if (type === 'error') {
            return  <button onClick={handleBackBtn}>{back}</button>
        }
    }

    return (
        <div className="info">
            <p>{text}</p>
            {configureButtons(type)}
        </div>
    )
}

export default Info;