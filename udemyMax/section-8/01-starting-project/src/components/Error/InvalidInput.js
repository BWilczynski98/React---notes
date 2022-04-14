import React from 'react';
import ReactDOM from 'react-dom'; // Nie używaj react-dom/client - wywala błąd, że portal nie jest funkcją
import './InvalidInput.css'

// Nowy komponent
const ErrorModal = ({ title, description, closeError }) => {
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

const InvalidInput = ({ title, description, closeError }) => {
    return (
        <>
            {ReactDOM.createPortal(<ErrorModal title={title} description={description} closeError={closeError} />, document.getElementById('overlay-root'))}

        </>
    );
}

export default InvalidInput;

// ? https://pl.reactjs.org/docs/portals.html