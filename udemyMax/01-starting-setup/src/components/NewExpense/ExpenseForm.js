import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState(''); //<-- Możemy to zapisać w inny sposób

    // ** W tym miejscu nadajemy value dla naszych wartości title, amount i data. 
    // *! Przypisujemy to do funkcji, nie do zmiennej
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value); 
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };


    const submitHandler = (event) => { 
        // *? https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
        event.preventDefault(); // onSubmit automatycznie odświeża strone, jest to domyślne zachowanie form. Ta metoda to wyłączy
        
        // ** Przypisujemy do obiektu naszę nadpisane wartości przez input user
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };
        console.log(expenseData);

        // ** Przekazanie z parent do child i z powrotem z child do parent poprzez props i funkcje.
        // *? https://javascript.plainenglish.io/how-to-pass-props-from-child-to-parent-component-in-react-d90752ff4d01

        props.onEnterExpenseData(expenseData);

        // ** Reset inputów
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

        // *! Trzeba ustawić w inputach value
    };
   
    return (
        <form onSubmit={submitHandler}> 
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' 
                    value={enteredTitle} // *! <---
                    onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number'  
                    value={enteredAmount} // *! <---
                    min='0.01' step='0.01' 
                    onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' 
                    value={enteredDate} // *! <---
                    min='2019-01-01' max='2022-12-31' 
                    onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;

// używamy obiektu
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',

    // });

    // const titleChangeHandler = (event) => {
    //     setUserInput({
    //         ...userInput,
    //         enteredTitle: event.target.value;
    //     });
    // };
    // const amountChangeHandler = (event) => {
    //     setUserInput({
    //         ...userInput,
    //         enteredAmount: event.target.value;
    //     });
    // };
    // const dateChangeHandler = (event) => {
    //     setUserInput({
    //         ...userInput,
    //         enteredDate: event.target.value;
    //     });
    // };

    // *! Jesli bazujemy na stanie poprzednim należy to zapisać:
    // const titleChangeHandler = (event) => {
    //     setUserInput((prevState) => { 
    //         return { ...prevState, enteredTitle: event.target.value};
    //      });
    // };