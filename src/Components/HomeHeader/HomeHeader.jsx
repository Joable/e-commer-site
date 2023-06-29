import furniture from '../../img/furniture.jpg';
import clothes from '../../img/clothes.jpg';
import electronics from '../../img/electronics.jpg';
import peripherals from '../../img/peripherals.jpg';

import styles from './HomeHeader.module.css';

function HomeHeader() {
    return ( 
        <>
        <div className={styles.headerImages}>
            <a href="#">
                <img src={furniture} alt="Furniture"/>
            </a>

            <a href="#">
                <img src={clothes} alt="Clothes" />
            </a>

            <a href="#">
                <img src={peripherals} alt="Peripherals" />
            </a>

            <a href="#">
                <img src={electronics} alt="Electronics" />
            </a>
        </div>
        </>
    );
}

export default HomeHeader;