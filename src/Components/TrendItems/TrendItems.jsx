import ProductItem from '../ProductItem/ProductItem';
import styles from './TrendItems.module.css'

function TrendItems() {
    const arrow1 = "<--", arrow2 = "-->";
    const iterator = [0,0,0,0,0,0,0,0,0,0];

    const moveXAxis = (value) => document.getElementById('trendItems').style.setProperty('--x-axis', value);
    
    return ( 
        <>
        <div className={styles.trendHeader}>
            <h2>Trending Products</h2>

            <div>
                <button onClick={() => moveXAxis("0%")}>{arrow1}</button>
                <button onClick={() => moveXAxis("-50%")}>{arrow2}</button>
            </div>

        </div>

        <div className={styles.trendBody}>
            <div id='trendItems' className={styles.trendItems}>
                {iterator.map(()=><ProductItem/>)}
            </div>
        </div>
        </>
    );
}

export default TrendItems;