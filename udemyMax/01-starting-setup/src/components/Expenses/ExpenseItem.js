import React, { useState } from 'react'; // Teoretycznie od wersji 17, nie musimy już pisać import React, wystarczyło by samo importowanie modułu, czyli import { useState } from 'react'
// Komponenty w React to najprościej nazywając funkcje JS
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css' // Musimy zaimportować plik CSS
import Card from '../UI/Card'; // Importujemy children z card, aby nadać border-radius i shadowbox

const ExpenseItem = (props) => {
    // ** Nazwa parametru jest dowolna, aczkolwiek przyjęto aby wpisać props. Jest to odwołanie do zmiennej przechowywanej w obiekcie "props"
    // const month = props.date.toLocaleString('en-US', { month: 'long' });
    // const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    // const year = props.date.getFullYear();

    // *! Aby użyć useState, wywołujemy go wewnątrz komponentu

    const [title, setTitle] = useState(props.title) // useState jest tablicą, która przyjmuję dwie wartości. Nazwe zmiennej, i funkcje którą wykona. Dlatego możemy wykonac destrukturyzacje i nadać towolne nazwy dla naszych argumentów.

    // ** 1. title = nazwa naszej zmiennej, którą będziemy używać w konstruktorze zamiast props.title
    // ** 2. setTitle = nazwa funkcji, którą będziemy wywoływać useState dla title
    const clickHandler = () => {
        setTitle('Update!')
        console.log(title)
    };

    return (
        // Wszystko musi byc w jednym "root" tzn nie możemy miec elementu złożonego z 3 różnych divów, tylko jednym divem "wrapperem" zawijamy wszystko w jednego roota
        <Card className="expense-item">
            {/* <div> Max postanowił rozdzielić datę na oddzielny komponent
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div> */}

            {/* W tym miejscu przekazujemy jeszcze raz dane dotyczące daty, które przekazywaliśmy w głównej "App.js" */}
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
        // Aby umieścić zmienną w React wystarczą same "wąsy" {nazwaZmiennej} bez dolara
        // Nazwy klas zapisujemy jako "className"
    );
};

export default ExpenseItem;

