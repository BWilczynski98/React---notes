import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = () => {

    const enterExpenseData = (expenseData) => {
        const expenseDataWithId = {
            ...expenseData,
            id: Math.random().toString(),
        };
        console.log(expenseDataWithId)
    };
    return (
        <div className='new-expense'>
            <ExpenseForm onEnterExpenseData={enterExpenseData} />
        </div>
    );
};

export default NewExpense;  