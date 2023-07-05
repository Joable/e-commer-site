import styles from './Separator.module.css';
import image from '../../img/osaka2.PNG';

function Separator() {
    return ( 
        <>
        <div className={styles.separatorBody}>
            <div className={styles.text}>Text</div>

            <img src={image} alt="Separator image"/>
        </div>
        </>
    );
}

export default Separator;