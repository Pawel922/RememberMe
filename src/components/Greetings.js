import React, { useContext, useEffect, useState } from 'react';

import Guest from './Guest';

import '../styles/Greetings.css';
import { useHistory, useParams } from 'react-router-dom';
import { MainContext } from './MainContext';

const API = "https://randomuser.me/api/?nat=us,gb,ca&inc=name,picture&results=";

const Greetings = (props) => {

    const { guests, lapseOfTime } = useContext(MainContext);
    const history = useHistory();
    const { numOfPeopleToGuess } = useParams();
    const [ordinalNum, setOrdinalNum] = useState(0);
    const [personToPresent, setPersonToPresent] = useState();

    const handleDataFetch = () => {
        fetch(`${API}${numOfPeopleToGuess}`)
        .then(response => {
            if(response.ok) return response;
            throw Error();
        })
        .then(response => response.json())
        .then(data => props.provideDataForMainContext(data.results))
        .catch(() => history.push({
            pathname: 'info',
            state: {
                type: 'error',
                text: 'I regret to say that something went wrong. Try to once again later.'
            }
        }))     
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
            setTimeout(() => clearInterval(intervalId), (numOfPeopleToGuess + 1) * lapseOfTime);
            return () => clearInterval(intervalId);
            // setPersonToPresent(guests[0]);
        }
    },[guests]);

    return (
        <div className="greetings">
            {typeof personToPresent !== 'undefined' 
                ?  <Guest 
                    num={ordinalNum}
                    numPeopleToGuess={numOfPeopleToGuess} 
                    person={personToPresent} 
                    time={lapseOfTime}
                  />
                : 'Please, wait for a while...'
            }
        </div>
    )
}

export default Greetings;