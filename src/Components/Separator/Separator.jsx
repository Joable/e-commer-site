import image from '../../img/osaka2.PNG';
import styles from './Separator.module.css';


function Separator({parameters}) {

    return ( 
        <>
        <div className={(parameters.reverse) ?  styles.bodyReverse : styles.separatorBody}>
            <div className={styles.textContainer}>
                <div className={styles.textBody}>
                    <h2>{parameters.title}</h2>

                    <p>{parameters.text}</p>

                    <button className={styles.separatorButton}>SHOP NOW</button>
                </div>
            </div>

            <img src={image} alt="Separator"/>
        </div>
        </>
    );
}

export default Separator;