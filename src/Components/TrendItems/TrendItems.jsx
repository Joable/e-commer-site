import ProductItem from '../ProductItem/ProductIem';
import styles from './TrendItems.module.css'

function TrendItems() {
    const arrow1 = "<--", arrow2 = "-->";
    const iterator = [0,0,0,0,0];
    
    return ( 
        <>
        <div className={styles.trendHeader}>
            <h2>Trending Products</h2>

            <div>
                <button>{arrow1}</button>
                <button>{arrow2}</button>
            </div>

        </div>

        <div className={styles.trendBody}>
            {iterator.map(()=><ProductItem/>)}
        </div>
        
        </>
    );
}

export default TrendItems;