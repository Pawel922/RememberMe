import React from 'react';

const Footer = () => {
    return (
        <footer>
            <p dangerouslySetInnerHTML={{ "__html": "&copy; Paweł Woźniak"}}/>
        </footer>
    )
}

export default Footer;