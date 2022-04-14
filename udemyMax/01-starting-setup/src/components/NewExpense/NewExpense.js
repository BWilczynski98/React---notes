import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ name, addExpenseToArray }) => {
    console.log(name);
    const enterExpenseData = (expenseData) => {
        const expenseDataWithId = {
            ...expenseData,
            id: Math.random().toString(),
        };
        addExpenseToArray(expenseDataWithId);
    };
    return (
        <div className='new-expense'>
            <ExpenseForm onEnterExpenseData={enterExpenseData} />
        </div>
    );
};

export default NewExpense;  