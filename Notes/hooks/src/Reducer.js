import React, { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            return state;
    };
};

const Reducer = () => {

    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <>
            <h1>useReducer</h1>
            <button onClick={() => { dispatch({ type: 'decrement' }) }}>Decrement</button>
            <h3>{state.count}</h3>
            <button onClick={() => { dispatch({ type: 'increment' }) }}>Increment</button>
        </>
    );
}

export default Reducer;


// O Reducer można mysleć jak o takim pojemniku, na wiele useState. Zamiast pisać w tym przypadku dwa różne useState dla inkrementacji i dekrementacji, piszemy jednego Reducer'a, który ma przełączniki, które wiedzą co mają wykonywać przy odpowiednim wywołaniu.

// state = nazwa obiektu, który przechowuje nasze zmienne, w tym przypadku count

// dispatch = "dyspozytornia" jest to taki "most" gdzie możemy wybrać w którą strone ma zadziałać nasza funkcja 

// reducer = nazwa funkcji, jaką wykona useReducer

// {count: 0} = tutaj akurat jest wpisany na sztywno obiekt, można by było po prostu wrzucić jakąs zainicjalizowaną zmienną

// po tym jeszcze mogła by być zmienna, która by przechowywała wartość inicjalizującją, np tutaj 0, dzięki, któremu moglibysmy resetować