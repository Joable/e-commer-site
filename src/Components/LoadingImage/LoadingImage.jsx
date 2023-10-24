import styles from './LoadingImage.module.css';

import Spinner from '../Spinner/Spinner';

export default function LoadingImage(){
    return(
        <div className={styles.element}>
            <Spinner/>
        </div>
    )
}