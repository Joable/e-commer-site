import furniture from '../../img/furniture.jpg';
import clothes from '../../img/clothes.jpg';
import electronics from '../../img/electronics.jpg';
import peripherals from '../../img/peripherals.jpg';

import styles from './HomeHeader.module.css';

function HomeHeader() {
    return ( 
        <>
        <div className={styles.headerImages}>
            <div className={styles.main}>
                <a href="#">
                    <img src={furniture} alt="Furniture"/>
                </a>
            </div>

            <div className={styles.second}>
                <a href="#">
                    <img src={clothes} alt="Clothes" />
                </a>
            </div>

            <div className={styles.third}>
                <a href="#">
                    <img src={peripherals} alt="Peripherals" />
                </a>

                <a href="#">
                    <img src={electronics} alt="Electronics" />
                </a>
            </div>
        </div>
        </>
    );
}

export default HomeHeader;