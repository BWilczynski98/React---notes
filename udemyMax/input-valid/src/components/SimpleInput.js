import React, { useState } from 'react';

const SimpleInput = (props) => {
  const [name, setName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [userTouched, setUserTouched] = useState(false);
  const [userFocus, setUserFocus] = useState(false)

  const nameIsInvalid = !enteredNameIsValid && userTouched && !userFocus;
  const inputClass = nameIsInvalid ? 'form-control invalid' : 'form-control';

  const submitFunction = (e) => {
    e.preventDefault();
    setUserTouched(true)
    setUserFocus(false)
    if (name.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    } else {
      setEnteredNameIsValid(true);
    };
    setName('')
  };

  return (
    <form onSubmit={submitFunction}>
      <div className={inputClass}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={name}
          onChange={input => {
            setName(input.target.value);
            setUserFocus(true)
          }}
        />
        {nameIsInvalid && <p className='error-text'>The name cannot be empty!</p>}
      </div>
      <div className="form-actions">
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
