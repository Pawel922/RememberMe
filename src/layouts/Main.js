import React from 'react';
import { Route } from "react-router-dom";

import StartPage from '../components/StartPage';

const Main = () => {
    return (
        <main>
            <Route path="/" component={StartPage}/>
        </main>
    )
}

export default Main;