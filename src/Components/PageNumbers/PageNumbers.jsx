import { useState } from 'react';
import styles from './PageNumbers.module.css';

export default function PageNumbers({productsPerPage, totalProducts, paginate}){
    const [activeNumber, setActiveNumber] = useState(1);
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++){
        pageNumbers.push(i);
    }

    return(
        <ul className={styles.numbers}>
            {pageNumbers.map(number => (
                <li key={number}>
                    <button className={(activeNumber === number) ? styles.activeNumber: styles.numberButton} 
                    onClick={() => {
                        paginate(number)
                        setActiveNumber(number)
                        }}>
                        {number}
                    </button>
                </li>
            ))}
        </ul>
    );
}