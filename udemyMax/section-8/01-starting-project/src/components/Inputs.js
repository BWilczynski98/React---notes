import React, { useState, useContext, useRef } from 'react';
import './Inputs.css'
import { GlobalContext } from '../Global';
import InvalidInput from './Error/InvalidInput';

const Inputs = () => {
    const nameUser = useRef();
    const ageUser = useRef();
    const [users, setUsers] = useContext(GlobalContext);
    const [error, setError] = useState();

    const createUser = (e) => {
        e.preventDefault();
        const userName = nameUser.current.value;
        const userAge = ageUser.current.value;
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
        nameUser.current.value = '';
        ageUser.current.value = '';

    };

    const closeError = () => {
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
                        ref={nameUser}
                    />
                </div>
                <div className='input-container'>
                    <label htmlFor='age'> Age (Years)</label><br></br>
                    <input
                        type='number'
                        name='age'
                        id='age'
                        className='user-input'
                        ref={ageUser}                    
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

// W tym przypadku useRef posłużyło do przypisania wartości bez aktualizacji stanu zmiennej po kazdym nacisnieciu klawisza przez użytkownika, a bezpośrednio bo kliknięciu btn. Importujemy useRef z reacta, tworzymy zmienną która będzie odpowiadać za useRef, w inpucie dajemy ref={nazwa naszego useRef} w funkcji robimy nową zmienną, która będzie przechowywać wartość nowaZmienna = zmiennaRef.current.value