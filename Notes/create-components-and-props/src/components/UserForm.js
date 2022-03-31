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