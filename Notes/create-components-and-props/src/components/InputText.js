import React, { useState } from 'react';
import './InputText.css'

const InputText = (props) => {

  const [userName, setUserName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const getUserName = (event) => {
    setUserName(event.target.value);
  };
  const getUserLastName = (event) => {
    setUserLastName(event.target.value);
  };
  const getUserEmail = (event) => {
    setUserEmail(event.target.value);
  };

  const resetInput = () => {
    setUserName('');
    setUserLastName('');
    setUserEmail('');
  };

  const createUser = (event) => {
    event.preventDefault();

    if (userName.trim() === '' ||
      userLastName.trim() === '' ||
      userEmail.trim() === ''
    ) { alert('Wrong data') };

    const user = {
      userName,
      userLastName,
      userEmail,
      id: Math.random().toString()
    };
    resetInput();
    console.log(user);
    props.getUser(user);
  };

  return (
    <div>
      <form onSubmit={createUser}>
        <label> Name <br></br>
          <input
            type="text"
            value={userName}
            onChange={getUserName}
          ></input><br></br>
        </label>
        <label>Last Name <br></br>
          <input type="text"
            value={userLastName}
            onChange={getUserLastName}
          ></input> <br></br>
        </label>
        <label>Email<br></br>
          <input type="email"
            value={userEmail}
            onChange={getUserEmail}
          ></input><br></br>
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default InputText