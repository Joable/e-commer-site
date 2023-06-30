import styles from './TrendItems.module.css'

function TrendItems() {
    const arrow1 = "<--", arrow2 = "-->"
    
    return ( 
        <div className={styles.trendHeader}>
            <h3>Trending Products</h3>

            <div>
                <button>{arrow1}</button>
                <button>{arrow2}</button>
            </div>
        </div>
        
    );
}

export default TrendItems;