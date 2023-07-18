import styles from './Home.module.css';

import HomeHeader from "../../Components/HomeHeader/HomeHeader";
import Separator from "../../Components/Separator/Separator";
import ProductCarousel from "../../Components/ProductCarousel/ProductCarousel";

function Home() {
    const kitchenSeparator = {
        title: "Kitchen utensils",
        text: "Get the best utensils for your kitchen",
        image:'../../img/kitchen.jpg',
        url:'/categories/kitchen',
        reverse: false
    };
    const lampsSeparator = {
        title: "Huge variety of lamps",
        text: "Search through our catalog of lamp and find the one that fits with you",
        image:'../../img/lamps.jpg',
        url:'/categories/lamps',
        reverse: true
    }

    return ( 
        <>
        <div className={styles.homeHeader}>
            <HomeHeader/>
        </div>

        <div className={styles.separator}>
            <Separator parameters={kitchenSeparator}/>
        </div>
        
        <div className={styles.trendItems}>
            <ProductCarousel/>
        </div>
        
        <div className={styles.separator}>
            <Separator parameters={lampsSeparator}/>
        </div>
        </>
    );
}

export default Home;