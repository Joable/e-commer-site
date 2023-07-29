import styles from './ProductQuantity.module.css';

import { useState } from 'react';

export default function ProductQuantity(){
    const [quantity, setQuantity] = useState(0);

    const add = () => {
        setQuantity(quantity + 1);
    };
    const substract = () => {
        if(quantity > 0)setQuantity(quantity - 1);
    };
    
    return(
        <div className={styles.count}>
            <button onClick={substract}>-</button>

            <div className={styles.countDisplay}>
                <h3>{quantity}</h3>
            </div>

            <button onClick={add}>+</button>
        </div>
    );
}