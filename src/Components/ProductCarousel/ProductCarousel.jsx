import ProductItem from '../ProductItem/ProductItem';
import styles from './ProductCarousel.module.css'

import { iterator } from '../../Utils/iterator';

function ProductCarousel() {
    const arrow1 = "<--", arrow2 = "-->";

    const moveXAxis = (value) => document.getElementById('trendItems').style.setProperty('--x-axis', value);
    
    return ( 
        <>
        <div className={styles.trendHeader}>
            <h2>Trending Products</h2>

            <div className={styles.headerButtons}>
                <button onClick={() => moveXAxis("0%")}>{arrow1}</button>
                <button onClick={() => moveXAxis("-50%")}>{arrow2}</button>
            </div>

        </div>

        <div className={styles.trendBody}>
            <div id='trendItems' className={styles.trendItems}>
                {iterator(10).map((element) => <ProductItem productData={element}/>)}
            </div>
        </div>
        </>
    );
}

export default ProductCarousel;