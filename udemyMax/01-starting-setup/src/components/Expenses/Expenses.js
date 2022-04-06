import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';


const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const setYear = (year) => {
        setFilteredYear(year);
    };

    const filteredExpenses = props.arrayExpenses.filter(el => {
        return el.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter defaultValue={filteredYear} pullYear={setYear} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList item={filteredExpenses} />
            </Card>
        </div>
    )
};
export default Expenses;



