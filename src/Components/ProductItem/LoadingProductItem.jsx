import styles from './LoadingProductItem.module.css';

export default function LoadingProductItem(){
    return(
        <div className={styles.item}>

            <div className={styles.itemImage}>
                
            </div>

            <div className={styles.itemBody}>
                <h4>Loading..</h4>
            </div>
        </div>
    );
};