import React from 'react';
import { Route } from "react-router-dom";

import Greetings from '../components/Greetings';
import StartPage from '../components/StartPage';

const Main = () => {
    return (
        <main>
            <Route path="/" exact component={StartPage}/>
            <Route path="/greetings" component={Greetings}/>
        </main>
    )
}

export default Main;