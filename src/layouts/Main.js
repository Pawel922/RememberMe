import React from 'react';
import { Route } from "react-router-dom";

import Greetings from '../components/Greetings';
import Info from '../components/Info';
import StartPage from '../components/StartPage';

const Main = () => {
    return (
        <main>
            <Route path="/" exact component={StartPage}/>
            <Route path="/greetings" component={Greetings}/>
            <Route path="/info" component={Info}/>
        </main>
    )
}

export default Main;