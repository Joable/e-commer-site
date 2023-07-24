import styles from './CartQuantity.module.css';

import { useState } from "react";


export default function CartQuantity(){
    const [quantity, setQuantity] = useState(0);

    const add = () => setQuantity(quantity + 1);
    const subtract = () => {
        if(quantity > 0) setQuantity(quantity - 1);
    };

    return(
        <div className={styles.quantity}>
            <button onClick={subtract}>-</button>

            <p>{quantity}</p>

            <button onClick={add}>+</button>
        </div>
    );
}