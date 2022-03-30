import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';


const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const displayYear = (year) => {
        setFilteredYear(year);
    };

    return (
        <div>
        <Card className='expenses'>
                <ExpensesFilter defaultValue={filteredYear} takeTheYearFromFilter={displayYear} />
                <h2>{filteredYear}</h2>
            <ExpenseItem
                date={props.items[0].date}
                title={props.items[0].title}
                amount={props.items[0].amount}
            />
            <ExpenseItem
                date={props.items[1].date}
                title={props.items[1].title}
                amount={props.items[1].amount}
            ></ExpenseItem>
            <ExpenseItem
                date={props.items[2].date}
                title={props.items[2].title}
                amount={props.items[2].amount}
            ></ExpenseItem>
            <ExpenseItem
                date={props.items[3].date}
                title={props.items[3].title}
                amount={props.items[3].amount}
            />
        </Card>
        </div >
    )
};

export default Expenses;



// Nazwy takie jak "date" "title" "amount" jest dowolna, odpowiadająca temu co chcemy tam przekazać. Po ustawieniu "parametrów" dla komponentu, przechodzimy do jego pliku i ustawiamy props w odpowiednim miejscu

// Możemy używać tagów "samozamykających się tzn. Zamaist <ExpenseItem></ExpenseItem> możemy użyc <ExpenseItem />"

// *! Przepływ naszych danych przez wiele komponentów. Tworząc ExpenseItem, a potem rozdzielając go na jeszcze mniejszy komponent daty ExpenseDate musimy przekzać "props.date" dwa razy. Tzn przekazujemy go tutaj w ExpenseItem i do tego w środku ExpenseItem, jeszcze raz do ExpenseDate