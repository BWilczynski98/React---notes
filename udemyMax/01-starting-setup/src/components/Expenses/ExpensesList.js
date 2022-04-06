import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
    if (props.item.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
    }

    return (
        <ul className='expenses-list'>
            {props.item.map(el => <ExpenseItem
                key={el.id}
                date={el.date}
                title={el.title}
                amount={el.amount} />)}
        </ul>
    );
};

export default ExpensesList;