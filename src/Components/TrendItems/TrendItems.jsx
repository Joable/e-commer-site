import { useEffect } from 'react';
import ProductItem from '../ProductItem/ProductIem';
import styles from './TrendItems.module.css'

function TrendItems() {
    const htmlElement = document.getElementById('trendItems');
    const arrow1 = "<--", arrow2 = "-->";
    const iterator = [0,0,0,0,0,0,0,0,0,0];

    useEffect(() => {
        const xAxisValue = getComputedStyle(document.getElementById('trendItems')).getPropertyValue('--x-axis')
        console.log(xAxisValue)
    },[]);

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