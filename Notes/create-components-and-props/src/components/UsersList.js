import React from 'react';
import './UsersList.css';
import UserForm from './UserForm';

const UsersList = (props) => {
    return (
        <div className='users-list-container'>
            {props.submitUsers.map(el => <UserForm
                key={el.id}
                name={el.userName}
                lastName={el.userLastName}
                email={el.userEmail}
            />
            )}
        </div>
    )
}

export default UsersList;

// ** HOW WORK

// 3.1 Ten komponent jest kreowany za pomocą innego komponentu "UserForm" gdzie przekazujemy nasze dane, ale tutaj rozbijamy już je na mniejsze "paczki"

// 4. Nasz props przechowuję tablice user (id, userName, userLastName, userEmail). Aby wyrenderować widok dla każdego elementu tablicy, stosuję metody map z purejs.

// 5. props.submitUsers (mówi nam dokładnie weź to co zostało przekazane w parametrze [props] wybierz całą tablicę, która jest teraz przechowywana pod nazwą z propsu w App.js [submitUsers]) i zastosuj na każdym elemencie mape.

// 6. map(el => <userForm ...wartości />) - Mówi weź każdy element i dla każdego elementu wywołaj komponent UserForm i dlatego komponentu prześlij nowe propsy "key={el.id}", "name={el.userName}", "lastName={el.userLastName}", "email={el.userEmail}".
    //6.1 W wartościach odwołujemy się bezpośrednio od nazwy naszego pojedyńczego elementy, w tym przypadku "el", a po kropce z racji tego, że to obiekt wybieramy dokładną nazwę wartości jaką przechowuje obiekt
    //6.2 Ważne jest, aby na mapach korzystać z kluczy https://pl.reactjs.org/docs/lists-and-keys.html
// Dalszy komentarz w UserForm