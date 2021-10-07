import React, { useEffect, useState } from 'react';

import Guest from './Guest';

import '../styles/Greetings.css';
import { useHistory } from 'react-router-dom';

const API = "https://randomuser.me/api/?nat=us,gb,ca&inc=name,picture&results=";

const Greetings = (props) => {

    const [guests, setGuests] = useState();
    const [ordinalNum, setOrdinalNum] = useState(0);
    const [personToPresent, setPersonToPresent] = useState();

    const history = useHistory();

    const lapseOfTime = 5000;
    const numPeopleToGuess = props.location.state;

    const handleDataFetch = () => {
        fetch(`${API}${numPeopleToGuess}`)
        .then(response => {
            if(response.ok) return response;
            throw Error();
        })
        .then(response => response.json())
        .then(data => setGuests(data.results))
        .catch(() => {
            const location = {
                pathname: 'info',
                state: {
                    type: 'error',
                    text: 'I regret to say that something went wrong. Try to once again later.'
                }
            }
            history.push(location);
        });
    }
    
    useEffect(()=> {
        handleDataFetch();
    },[])

    useEffect(() => {
        if(typeof guests !== 'undefined') 
        {   
            let index = 0;
            const intervalId = setInterval(
                () => {
                    setPersonToPresent(guests[index++]);
                    setOrdinalNum(prevNum => prevNum + 1);
                }
            ,lapseOfTime);
            setTimeout(() => clearInterval(intervalId), (numPeopleToGuess + 1) * lapseOfTime);
            return () => clearInterval(intervalId);
        }
    },[guests]);

    return (
        <div className="greetings">
            {typeof personToPresent !== 'undefined' 
                ?  <Guest 
                    num={ordinalNum}
                    numPeopleToGuess={numPeopleToGuess} 
                    person={personToPresent} 
                    time={lapseOfTime}
                  />
                : 'Please, wait for a while...'
            }
        </div>
    )
}

export default Greetings;