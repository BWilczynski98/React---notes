import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const enterExpenseData = (expenseData) => {
        const expenseDataWithId = {
            ...expenseData,
            id: Math.random().toString(),
        };
        props.pullExpenses(expenseDataWithId);
    };
    return (
        <div className='new-expense'>
            <ExpenseForm onEnterExpenseData={enterExpenseData} />
        </div>
    );
};

export default NewExpense;  