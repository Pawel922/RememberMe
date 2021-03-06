import React, { useState } from 'react';
import { Route } from "react-router-dom";

import Form from '../components/Form';
import Greetings from '../components/Greetings';
import Info from '../components/Info';
import { MainContext } from '../components/MainContext';
import Results from '../components/Results';
import Settings from '../components/Settings';
import StartPage from '../components/StartPage';

const Main = () => {

    const [mainContext, setMainContext] = useState();
    const [time, setTime] = useState(3000);

    const provideDataForMainContext = (data) => setMainContext(data);
    const provideTimeFromSettings = (time) => setTime(time);

    return (
        <main>   
            <MainContext.Provider value={{guests: mainContext, lapseOfTime: time}}>
                <Route path="/" exact component={StartPage}/>
                <Route path="/form" component={Form}/>        
                <Route 
                    path="/greetings/:numOfPeopleToGuess" 
                    render={() => <Greetings provideDataForMainContext={provideDataForMainContext}/>}
                />
                <Route path="/info" component={Info}/>
                <Route path="/results" component={Results}/>
                <Route 
                    path="/settings" 
                    render={() => <Settings provideTimeFromSettings={provideTimeFromSettings}/>}
                />
            </MainContext.Provider>  
        </main>
    )
}

export default Main;