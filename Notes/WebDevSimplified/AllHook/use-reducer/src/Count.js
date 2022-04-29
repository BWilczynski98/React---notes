import React, { useReducer } from 'react';
import './Count.css'

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
};

const Count = () => {
    const reducerFn = (prevState, action) => {
        switch (action.type) {
            case ACTIONS.DECREMENT:
                return { number: prevState.number - 1 };
            case ACTIONS.INCREMENT:
                return { number: prevState.number + 1 };
        }
    }

    const [state, dispatchFn] = useReducer(reducerFn, { number: 0 });
    // const [number, dispatchFn] = useReducer(reducerFn, 0); można to też zapisać tak
    return (
        <>
            <div className='count-wrapper'>
                <button className='count-btn' onClick={() => { dispatchFn({ type: ACTIONS.DECREMENT }) }}>-</button>
                <h3>{state.number}</h3>
                {/* <h3>{number}</h3> kiedy użylibyśmy drugiego zapisu reducer*/}
                <button className='count-btn' onClick={() => { dispatchFn({ type: ACTIONS.INCREMENT }) }}>+</button>
            </div>
        </>
    );
}

export default Count;