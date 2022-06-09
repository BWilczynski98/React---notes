import React from 'react';
import styles from './YourCart.module.css';
import { FaShoppingCart } from "react-icons/fa";

const YourCart = () => {
    return (
        <>
            <div className={styles.container}>
                <h3>Your cart</h3>
                <FaShoppingCart />
            </div>
        </>
    );
}

export default YourCart;