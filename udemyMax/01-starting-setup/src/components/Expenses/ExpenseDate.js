// Nowy komponent daty, który będzie używany w ExpenseItem
import './ExpenseDate.css'
const ExpenseDate = (props) => { 
    // *? https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    );
};

export default ExpenseDate;
