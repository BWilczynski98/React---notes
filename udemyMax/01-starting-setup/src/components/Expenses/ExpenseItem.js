// Komponenty w React to najprościej nazywając funkcje JS
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css' // Musimy zaimportować plik CSS
import Card from '../UI/Card'; // Importujemy children z card, aby nadać border-radius i shadowbox

const ExpenseItem = (props) => {
    // ** Nazwa parametru jest dowolna, aczkolwiek przyjęto aby wpisać props. Jest to odwołanie do zmiennej przechowywanej w obiekcie "props"
    // const month = props.date.toLocaleString('en-US', { month: 'long' });
    // const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    // const year = props.date.getFullYear();


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
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
        // Aby umieścić zmienną w React wystarczą same "wąsy" {nazwaZmiennej} bez dolara
        // Nazwy klas zapisujemy jako "className"
    );
};

export default ExpenseItem;

