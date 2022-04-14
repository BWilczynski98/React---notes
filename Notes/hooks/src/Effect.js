import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Effect = ({ name }) => {
    const [data, setData] = useState("");
    const [x, setX] = useState("");

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments").then((response) => {
            setData(response.data[0].email);
            console.log('Api was called');
        });
    }, []);



    return (
        <>
            <h1>useEffect</h1>
            <h3>{data}</h3>
            <h6>{name}</h6>
        </>
    );
}

export default Effect;

// Zawsze jest wywołany przy obojętnie jakim renderze, też przy załadowaniu/przeładowaniu strony