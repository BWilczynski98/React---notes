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

// 6. map()