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
        title: "Creative harmonious living",
        text: "Our products are all made to standar sizes so that you can mix and match the freely.",
        image:'../../img/livingRoom.PNG',
        url:'/categories/furniture',
        reverse: true
    };

    return ( 
        <>
        <section className={styles.homeHeader}>
            <HomeHeader/>
        
            <Separator parameters={kitchenSeparator}/>
        </section>

        <section className={styles.productCarousel}>
            <ProductCarousel/>
        </section>
        
        <section className={styles.lampSeparator}>
            <Separator parameters={lampsSeparator}/>
        </section>
        </>
    );
}

export default Home;