// Komponenty w React to najprościej nazywając funkcje JS
import './ExpenseItem.css' // Musimy zaimportować plik CSS

const ExpenseItem = () => {
    return ( // Wszystko musi byc w jednym "root" tzn nie możemy miec elementu złożonego z 3 różnych divów, tylko jednym divem "wrapperem" zawijamy wszystko w jednego roota
        <div className="expense-item">
            <div>March 28th 2022</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div className="expense-item__price">$294.67</div>
            </div>
        </div>
    );
};

export default ExpenseItem;