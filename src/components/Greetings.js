import React, { useEffect, useState } from 'react';

import Guest from './Guest';

const API = "https://randomuser.me/api/?nat=us,gb&inc=name,picture&results=";
const lapseOfTime = 3000;

const Greetings = (props) => {

    const [personToPresent, setPersonToPresent] = useState();
    const [guests, setGuests] = useState();
    const numPeopleToGuess = props.location.state;

    const handleDataFetch = () => {
        fetch(`${API}${numPeopleToGuess}`)
        .then(response => {
            if(response.ok) return response;
            throw Error(response.status);
        })
        .then(response => response.json())
        .then(data => setGuests(data.results))
        .catch(error => console.log(error));
    }
    
    useEffect(()=> {
        handleDataFetch();
    },[])

    useEffect(() => {
        if(typeof guests !== 'undefined') 
        {   
            let index = 0;
            const intervalId = setInterval(() => setPersonToPresent(guests[index++]),lapseOfTime);
            setTimeout(() => clearInterval(intervalId), (numPeopleToGuess + 1) * lapseOfTime);
            return () => clearInterval(intervalId);
        }
    },[guests]);

    return (
        <div>
            <p>Greetings</p>
            {typeof personToPresent !== 'undefined' ? <Guest guest={personToPresent}/> : 'Wait for a while...'}
        </div>
    )
}

export default Greetings;