import React from 'react';
import './UserForm.css'

const UserForm = (props) => {
    return (
        <div className='user-form-container'>
            <div className='user-data'>Name: {props.name}</div>
            <div className='user-data'>Last Name: {props.lastName}</div>
            <div className='user-data'>Email: {props.email}</div>
        </div>
    )
}

export default UserForm

// ** HOW WORK

// 7. UserForm dostaje w propsie "key", "name", "lastName" i "email". Są to moje własnę nazwy.

// 8. Aby uzyskać do nich dostęp należy się odwołac poprzez props.name itp

// 9. W porządanych miejscach wstawiamy odpowiednie wartości, które mają się wyrenderować