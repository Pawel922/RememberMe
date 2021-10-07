import React from 'react';
import { Route } from "react-router-dom";

import Form from '../components/Form';
import Greetings from '../components/Greetings';
import Info from '../components/Info';
import StartPage from '../components/StartPage';

const Main = () => {
    return (
        <main>           
            <Route path="/form" component={Form}/>
            <Route path="/greetings" component={Greetings}/>
            <Route path="/info" component={Info}/>
            <Route path="/" exact component={StartPage}/>
        </main>
    )
}

export default Main;