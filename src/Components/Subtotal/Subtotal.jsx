import styles from './Subtotal.module.css';

import { useState } from 'react';

export default function Subtotal(){
    const [subtotal, setSubtotal] = useState(0);

    return(
        <div className={styles.subtotal}>
            <h3>Subtotal</h3>

            <h4>{subtotal}$</h4>
        </div>
    );
}