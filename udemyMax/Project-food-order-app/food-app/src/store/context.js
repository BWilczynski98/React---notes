import React, { createContext } from 'react';

export const GlobalConext = createContext();

export const ContextProvider = (props) => {
    return (
        <GlobalConext.Provider>
            {props.children}
        </GlobalConext.Provider>
    );
};

