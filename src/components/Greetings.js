import React, { useState } from 'react';

const API = "https://randomuser.me/api/?nat=us,fr,gb&inc=name,picture";

const Greetings = (props) => {

    const [guests, setGuests] = useState();
    const numPeopleToGuess = props.location.state;

    const handleDataFetch = () => {
        fetch(`${API}&results=${numPeopleToGuess}`)
        .then(response => {
            if(response.ok) return response;
            throw Error(response.status);
        })
        .then(response => response.json())
        .then(data => setGuests(data.results))
        .catch(error => console.log(error));
    }
    
    handleDataFetch();

    return (
        <div>
            <p>Greetings</p>
        </div>
    )
}

export default Greetings;