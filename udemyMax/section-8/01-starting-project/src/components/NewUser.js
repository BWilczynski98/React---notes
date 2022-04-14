import React from 'react';
import './NewUser.css';

const NewUser = ({ name, age }) => {
    return (
        <div className='new-user-container'>
            <span className='user-text'>{`${name} (${age} years old)`}</span>
        </div>
    );
}

export default NewUser;