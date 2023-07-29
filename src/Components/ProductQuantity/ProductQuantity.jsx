import styles from './ProductQuantity.module.css';

import { useState } from 'react';

export default function ProductQuantity(){
    const [quantity, setQuantity] = useState(0)
    
    return(
        <div className={styles.count}>
            <button>-</button>

            <div className={styles.countDisplay}>
                <h3>{quantity}</h3>
            </div>

            <button>+</button>
        </div>
    );
}