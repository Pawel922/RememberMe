import React from 'react';

import '../styles/StartPage.css';

const StartPage = () => {
    return (
        <div className="startPage">
            <div className="description">
                <p>Try to imagine, that you are at the big party. Because of your famous a lot of people want to know you. Are you able to remember their names? Let's check it!</p>
            </div>
            <div className="buttons">
                <section>
                    <div>
                        <button>Easy</button>
                        <p>up to 5</p>
                    </div>
                    <div>
                        <button>Medium</button>
                        <p>up to 10</p>
                    </div>                    
                    <div>
                        <button>Hard</button>
                        <p>up to 15</p>
                    </div>
                </section>
                <button>Start</button>
            </div>
        </div>
    )
}

export default StartPage;