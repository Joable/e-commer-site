import styles from './HomeHeader.module.css';

import { Link } from 'react-router-dom';

function HomeHeader() {
    return ( 
        <>
        <div className={styles.headerImages}>

            <Link className={styles.furniture} to="/categories/furniture">
                <img src={'../../img/furniture.jpg'} alt="Furniture"/>
                <p></p>
                <h3>Furniture</h3>
            </Link>

            <Link className={styles.lamps} to="/categories/lamps">
                <img src={'../../img/lamps.jpg'} alt="Lamps" />
                <p></p>
                <h3>Lamps</h3>
            </Link>

            <Link className={styles.peripherals} to="/categories/peripherals">
                <img src={'../../img/peripherals.jpg'} alt="Peripherals" />
                <p></p>
                <h3>Peripherals</h3>
            </Link>

            <Link className={styles.electronics} to="/categories/electronics">
                <img src={'../../img/electronics.jpg'} alt="Electronics" />
                <p></p>
                <h3>Electronics</h3>
            </Link>
            
        </div>
        </>
    );
}

export default HomeHeader;