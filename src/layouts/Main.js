import React, { useState } from 'react';
import { Route } from "react-router-dom";

import Form from '../components/Form';
import Greetings from '../components/Greetings';
import Info from '../components/Info';
import { MainContext } from '../components/MainContext';
import StartPage from '../components/StartPage';

const Main = () => {

    const [mainContext, setMainContext] = useState();

    const provideDataForMainContext = (data) => setMainContext(data);

    return (
        <main>   
            <MainContext.Provider value={{guests: mainContext}}>
                <Route path="/form" component={Form}/>        
                <Route 
                    path="/greetings/:numOfPeopleToGuess" 
                    render={() => (<Greetings provideDataForMainContext={provideDataForMainContext}/>)}
                />
                <Route path="/info" component={Info}/>
                <Route path="/" exact component={StartPage}/>
            </MainContext.Provider>  
        </main>
    )
}

export default Main;