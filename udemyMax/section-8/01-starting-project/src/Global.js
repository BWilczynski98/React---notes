import React, { useState, createContext } from 'react';

export const GlobalContext = createContext();

export const Global = (props) => {
    const [users, setUsers] = useState([]);
    return (
        <GlobalContext.Provider value={[users, setUsers]}>
            {props.children}
        </GlobalContext.Provider>
    );
}
