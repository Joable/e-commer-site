import styles from './CartQuantity.module.css';

import { useState } from "react";

import { setProductQuantity } from '../../Services/setCartInventory';


export default function CartQuantity({id, quantity}){
    const [countQuantity, setCountQuantity] = useState(quantity);

    const add = () => {
        setCountQuantity(countQuantity + 1)
        
        setProductQuantity(id, countQuantity + 1);
    };
    const subtract = () => {
        if(countQuantity > 0) {
            setCountQuantity(countQuantity - 1);

            setProductQuantity(countQuantity - 1);
        };
    };

    return(
        <div className={styles.quantity}>
            <button onClick={subtract}>-</button>

            <p>{countQuantity}</p>

            <button onClick={add}>+</button>
        </div>
    );
}