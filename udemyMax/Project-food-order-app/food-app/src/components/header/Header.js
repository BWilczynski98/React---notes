import React from 'react';
import YourCart from '../UI/YourCart';
import styles from './Header.module.css';


const Header = () => {
    return (
        <>
            <div className={styles.container}>
                <div>
                    <h1>ReactMeals</h1>
                </div>
                <div>
                    <YourCart />
                </div>
            </div>
        </>
    );
}

export default Header;