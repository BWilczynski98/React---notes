import React from 'react';
import { useState } from 'react';

const State = () => {
    const [randomNumber, setRandomNumber] = useState(0);

    const myFunc = () => {
        let number = Math.floor(Math.random() * 101);
        setRandomNumber(number)
    }

    return (
        <>
            <h1>useState</h1>
            <button onClick={myFunc}>Random number</button>
            <h3>{randomNumber}</h3>
        </>
    );
}

export default State;

// Podstawowy hook, dzięki któremu można aktualizować zmienną/funkcje ogólnie elementy na stronie. Pierwszy argument tablicy to nazwa zmiennej, drugi to nazwa "funkcji", która aktualizuję naszą zmienną