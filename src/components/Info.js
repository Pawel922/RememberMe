import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import '../styles/Info.css';


const back = <FontAwesomeIcon icon={faArrowAltCircleLeft} />
const check = <FontAwesomeIcon icon={faCheckCircle} />

const Info = (props) => {

    const {type, text} = props.location.state;

    const configureButtons = (type) => {
        if(type === 'info') {
            return (
                <>
                    <a href="/">{back}</a>
                    <a href="/">{check}</a>
                </>
            )
        } else if (type === 'error') {
            return  <a href="/">{back}</a>
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