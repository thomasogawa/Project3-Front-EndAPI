import React, { useState } from 'react';
import './guessbuttons.css';
const GuessButtons = ({ isCriminal }) => {
    const [guess, setGuess] = useState(null);

    const handleGuess = (guessedIsCriminal) => {
        setGuess(guessedIsCriminal);
    };

    return (
        <div>
            <button className='guessbutton'
                style={{ backgroundColor: guess === true ? (isCriminal ? 'green' : 'red') : 'white smoke' }}
                onClick={() => handleGuess(true)}
                disabled={guess !== null}
            >
                Criminal
            </button>
            <button className='guessbutton'
                style={{ backgroundColor: guess === false ? (!isCriminal ? 'green' : 'red') : 'white smoke' }}
                onClick={() => handleGuess(false)}
                disabled={guess !== null}
            >
                Not Criminal
            </button>
        </div>
    );
};

export default GuessButtons;
