import styles from './LoadingProductItem.module.css';

import Spinner from '../Spinner/Spinner';

export default function LoadingProductItem(){
    return(
        <div className={styles.item}>

            <div className={styles.itemSpinner}>
                <Spinner/>
            </div>

            <div className={styles.itemBody}>
                <h4>Loading...</h4>
            </div>
        </div>
    );
};