import ProductItem from '../ProductItem/ProductItem';
import styles from './ProductCarousel.module.css'

import { useEffect, useState } from 'react';

import { getTrendProducts } from '../../Services/getProducts'

function ProductCarousel() {
    const [trendProducts, setTrendProducts] = useState([])
    const arrow1 = "<--", arrow2 = "-->";

    useEffect(() => {
        const responseProduct = async () =>{
            try{
                 const response = await getTrendProducts();

                setTrendProducts(response.docs);
            }catch(e){
                console.log(e)
            }
        };

        responseProduct();
    }, []);

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
                {trendProducts.map((element) => <ProductItem id={element.id} productData={element.data()}/>)}
            </div>
        </div>
        </>
    );
}

export default ProductCarousel;