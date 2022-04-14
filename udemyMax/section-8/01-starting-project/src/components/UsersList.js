import React, { useState, useContext } from 'react';
import './UsersList.css';
import NewUser from './NewUser';
import { GlobalContext } from '../Global';


const UsersList = () => {
    const [users, setUsers] = useContext(GlobalContext);
    console.log(users);

    if (users.length > 0) {
        return (
            <div className='users-list-container'>
                {users.map(user =>
                    <NewUser name={user.name} age={user.age} key={Math.random()} />
                )}
            </div>
        );
    }



}

export default UsersList;