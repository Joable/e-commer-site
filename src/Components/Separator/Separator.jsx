import styles from './Separator.module.css';

import { Link } from 'react-router-dom';

function Separator({parameters}) {

    return ( 
        <>
        <div className={(parameters.reverse) ?  styles.bodyReverse : styles.separatorBody}>
            
            <div className={styles.textContainer}>

                <div className={styles.textBody}>
                    <h2>{parameters.title}</h2>

                    <p>{parameters.text}</p>

                    <Link to={`${parameters.url}`} target='_blank'>
                        <button className={styles.separatorButton}><b>SHOP NOW</b></button >
                    </Link>
                </div>

            </div>

            <div className={styles.separatorImage}>
                <img src={parameters.image} alt="Separator"/>
            </div>

        </div>
        </>
    );
}

export default Separator;