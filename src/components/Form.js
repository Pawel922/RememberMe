import React, { useContext } from 'react';
import { MainContext } from './MainContext';

const Form = () => {

    const {guests} = useContext(MainContext);

    return (
        <div>
            {console.log(guests)}
            <p>Form</p>
        </div>
    )
}

export default Form;