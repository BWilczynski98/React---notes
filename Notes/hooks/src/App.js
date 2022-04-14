import { useState, useReducer } from 'react';
import './App.css';
import State from './State';
import Reducer from './Reducer';
import Effect from './Effect';

function App() {
  // const [counter, setCounter] = useState(0);

  // const increment = () => {
  //   setCounter(prevCounter => prevCounter + 1);
  // };
  const [name, setName] = useState("");
  const [newName, setNewName] = useState('');

  const nameHandler = (event) => {
    setName(event.target.value)
  }

  const sendName = (event) => {
    event.preventDefault();
    setNewName(name);
  };

  return (
    <div className="App">
      <State />
      <Reducer />
      <Effect name={newName} />
      <form onSubmit={sendName}>
        <input onChange={nameHandler} />
        <button type='submit'>Send</button>
      </form>
    </div>
  );
}

export default App;


