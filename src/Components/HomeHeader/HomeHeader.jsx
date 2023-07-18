import styles from './HomeHeader.module.css';

import { Link } from 'react-router-dom';

function HomeHeader() {
    return ( 
        <>
        <div className={styles.headerImages}>
            <div className={styles.main}>
                <Link to="/categories/furniture" target="_blank">
                    <img src={'../../img/furniture.jpg'} alt="Furniture"/>
                    <p></p>
                    <h3>Furniture</h3>
                </Link>
            </div>

            <div className={styles.second}>
                <div className={styles.clothes}>
                    <Link to="/categories/clothes" target="_blank">
                        <img src={'../../img/clothes.jpg'} alt="Clothes" />
                        <p></p>
                        <h3>Clothes</h3>
                    </Link>
                </div>

                <div className={styles.third}>
                    <Link to="/categories/peripherals" target="_blank">
                        <img src={'../../img/peripherals.jpg'} alt="Peripherals" />
                        <p></p>
                        <h3>Peripherals</h3>
                    </Link>

                    <Link to="/categories/electronics" target="_blank">
                        <img src={'../../img/electronics.jpg'} alt="Electronics" />
                        <p></p>
                        <h3>Electronics</h3>
                    </Link>
                </div>
            </div>
        </div>
        </>
    );
}

export default HomeHeader;