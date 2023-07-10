import styles from './Home.module.css';

import HomeHeader from "../../Components/HomeHeader/HomeHeader";
import Separator from "../../Components/Separator/Separator";
import TrendItems from "../../Components/TrendItems/TrendItems";

function Home() {
    return ( 
        <>
        <div className={styles.homeHeader}>
            <HomeHeader/>
        </div>

        <div className={styles.separator}>
            <Separator/>
        </div>
        
        <div className={styles.trendItems}>
            <TrendItems/>
        </div>
        
        <div className={styles.separator}>
            <Separator/>
        </div>
        </>
    );
}

export default Home;