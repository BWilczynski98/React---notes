import React, { useState, useEffect } from 'react';

const useCounter = (forwards = true) => { // Najważniejsze jest to, aby zacząć nazwe od "use"
    const [counter, setCounter] = useState(0); // W środku normalnie możemy używać hooków



    useEffect(() => {
        const interval = setInterval(() => {
            if (forwards) {
                setCounter((prevCounter) => prevCounter + 1);
            } else {
                setCounter((prevCounter) => prevCounter - 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [forwards]);
    return counter; // Jest to funkcja, więc możemy coś z niej zwracać
};

export default useCounter;