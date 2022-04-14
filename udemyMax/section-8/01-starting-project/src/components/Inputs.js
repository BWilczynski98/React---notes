import React, { useState, useContext } from 'react';
import './Inputs.css'
import { GlobalContext } from '../Global';
import InvalidInput from './Error/InvalidInput';

const Inputs = () => {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [users, setUsers] = useContext(GlobalContext);
    const [error, setError] = useState();

    const createUser = (e) => {
        e.preventDefault();

        if (userName.trim() === '' || userAge === '') {
            setError({
                title: 'Invalid input',
                description: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }

        if (+userAge < 1) {
            setError({
                title: 'Invalid age',
                description: 'Please enter a valid age (> 0).'
            });
            return;
        }

        setUsers(prevUsers => [...prevUsers, { name: userName, age: userAge }])
        setUserName('');
        setUserAge('');
    };

    const closeError = (params) => {
        setError(null);
    }

    return (
        <>
            {error && <InvalidInput title={error.title} description={error.description} closeError={closeError} />}
            <form className='user-form' onSubmit={createUser}>
                <div className='input-container'>
                    <label htmlFor='username'> Username</label><br></br>
                    <input
                        type='text'
                        name='name'
                        id='username'
                        className='user-input'
                        value={userName}
                        onChange={e => { setUserName(e.target.value) }}
                    />
                </div>
                <div className='input-container'>
                    <label htmlFor='age'> Age (Years)</label><br></br>
                    <input
                        type='number'
                        name='age'
                        id='age'
                        className='user-input'
                        value={userAge}
                        onChange={e => { setUserAge(e.target.value) }}
                    />
                </div>
                <div className='input-container'>
                    <button className='user-btn' type='submit'>Add User</button>
                </div>
            </form>
        </>
    );
}

export default Inputs;