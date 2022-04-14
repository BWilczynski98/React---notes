import React from 'react';
import './InvalidInput.css'

const InvalidInput = ({ title, description, closeError }) => {
    return (
        <>
            <div className='backdrop' onClick={closeError} />
            <div class='invalid-input-container'>

                <div className='invalid-input-header'>
                    <h3>{title}</h3>
                </div>
                <div className='invalid-input-main'>
                    <p>{description}</p>
                </div>
                <div className='invalid-input-footer'>
                    <button onClick={closeError}>Okay</button>
                </div>
            </div>
        </>
    );
}

export default InvalidInput;