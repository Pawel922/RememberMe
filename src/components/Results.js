import React, { useContext } from 'react';
import { MainContext } from './MainContext';

const Results = (props) => {

    const answers  = props.location.state;
    const { guests } = useContext(MainContext);

    return (
        <div>
            {console.log(answers, guests)}
        </div>
    )

}

export default Results;