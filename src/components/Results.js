import React, { useContext } from 'react';
import { MainContext } from './MainContext';

const Results = (props) => {

    const answers  = props.location.state;
    const { guests } = useContext(MainContext);

    const showResults = () => {
        return guests.map((guest,index) => 
            <div key={index}>
                <img alt='face' src={guest.picture.medium}/>
                <p>{guest.name.first}</p>
                <p>{answers[index]}</p>
            </div>
        )
    }


    return (
        <div>
            {showResults()}
        </div>
    )

}

export default Results;