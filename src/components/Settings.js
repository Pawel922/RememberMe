import React, { useRef, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faCheckCircle, faStopwatch } from '@fortawesome/free-solid-svg-icons';

import '../styles/Settings.css';
import { useHistory } from 'react-router-dom';

const back = <FontAwesomeIcon icon={faArrowAltCircleLeft} />
const save = <FontAwesomeIcon icon={faCheckCircle} />
const timer = <FontAwesomeIcon icon={faStopwatch}/>

const Settings = () => {

    const history = useHistory();
    const indicatorRef = useRef();
    let mouseOver= false;
    const stripRef = useRef();
    const [time, setTime] = useState();
    

    const handleBackBtn = () => history.push({pathname: '/'});

    const handleMouseMove = (event) => {
       mouseOver = true;
    }

    const handleOnClick = (event) => {
        let element = event.target;
        if (element.className === 'indicator') element = element.parentElement;
        const rect = element.getBoundingClientRect();
        const stripWidth = rect.width;
        if(mouseOver) {
            const offsetX = event.clientX - rect.left;
            if (offsetX > 0.15 * stripWidth && offsetX < 0.25 * stripWidth) {
                indicatorRef.current.style = 'left: 15%';
                setTime(3000);
            }
            else if (offsetX > 0.45 * stripWidth && offsetX < 0.55 * stripWidth) {
                indicatorRef.current.style = 'left: 45%';
                setTime(5000);
            } 
            else if (offsetX > 0.75 * stripWidth && offsetX < 0.85 * stripWidth) {
                indicatorRef.current.style = 'left: 75%';
                setTime(7000);
            }
        }
    }

    return (
        <div className="settings">
            <h2>Settings</h2>
            <div className="explanation">Hereunder you can set how long greeting the guest will last.</div>
            <div className="timer">
                <div className="icon">{timer}</div>
                <div className="strip" onClick={handleOnClick} onMouseMove={handleMouseMove} ref={stripRef}>
                    <p className="indicator" ref={indicatorRef}/>
                    <p>3s</p>
                    <p>5s</p>
                    <p>7s</p>
                </div>
            </div>
            <div>
                <button onClick={handleBackBtn}>{back}</button>
                <button>{save}</button>
            </div>
        </div>
    )

}

export default Settings;