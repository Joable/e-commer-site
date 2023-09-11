import styles from './LoadingProduct.module.css';

import Spinner from '../Spinner/Spinner';

export default function LoadingProduct(){
    return(
        <div className={styles.loading}>
            <h2 className={styles.name}>
                Loading...
            </h2>

            <div className={styles.loadingBody}>
                <div className={styles.element}>
                    <Spinner/>
                </div>

                <div className={styles.element}>
                    <Spinner/>
                </div>
            </div>

            <div className={styles.details}>
                <div className={styles.detail}>
                    <Spinner/>
                </div>

                <div className={styles.detail}>
                    <Spinner/>
                </div>

                <div className={styles.detail}>
                    <Spinner/>
                </div>
            </div>
        </div>
    );
};