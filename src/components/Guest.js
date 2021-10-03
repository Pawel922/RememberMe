import React from 'react';

const Guest = ({guest}) => {
    const { name, picture } = guest;
    return (
        <div>
            <p>{`My name is ${name.first}`}</p>
            <img src={picture.large} alt="face"></img>
        </div>
    )
}

export default Guest