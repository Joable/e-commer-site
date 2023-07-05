import styles from './Separator.module.css';
import image from '../../img/osaka2.PNG';

function Separator() {
    return ( 
        <>
        <div className={styles.separatorBody}>

            <div className={styles.textContainer}>
                <div className={styles.textBody}>
                    <h2>Title</h2>

                    <p>
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                        Sed eleifend leo pellentesque, pharetra ex eget, tempor risus.
                    </p>

                    <button className={styles.separatorButton}>SHOP NOW</button>
                </div>
            </div>

            <img src={image} alt="Separator"/>

        </div>
        </>
    );
}

export default Separator;