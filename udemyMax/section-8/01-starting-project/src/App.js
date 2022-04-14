import React from 'react';
import Inputs from './components/Inputs';
import UsersList from './components/UsersList';
import InvalidInput from './components/Error/InvalidInput';
import './App.css'
import { Global } from './Global';

function App() {
  return (
    <div className='wrapper'>
      <Global>
        <Inputs />
        <UsersList />
      </Global>
    </div>
  );
}

export default App;
