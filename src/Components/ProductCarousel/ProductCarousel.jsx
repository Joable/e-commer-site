import ProductItem from '../ProductItem/ProductItem';
import styles from './ProductCarousel.module.css'

import { useEffect, useState } from 'react';

import { getTrendProducts } from '../../Services/getProducts'

function ProductCarousel() {
    const [trendProducts, setTrendProducts] = useState([]);
    let xAxisProperty = 0;
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

    const setXAxisValues = () => {
        const widthProperty = document.defaultView.getComputedStyle(document.getElementById('trendItems')).getPropertyValue("width");
        let xAxis = {
            limit: -50,
            shift: 50
        };

        if(parseInt(widthProperty) > 2000)  xAxis = { limit: -80, shift: 20};

        return xAxis;
    }

    const moveRight = () => {
        let xAxis = setXAxisValues();
        
        if(xAxisProperty > xAxis.limit){
            xAxisProperty = xAxisProperty - xAxis.shift;
            
            document.getElementById('trendItems').style.setProperty('--x-axis', `${xAxisProperty}%`);
        }
    };

    const moveLeft = () => {
        let xAxis = setXAxisValues();

        if(xAxisProperty < 0){
            xAxisProperty = xAxisProperty + xAxis.shift;
            
            document.getElementById('trendItems').style.setProperty('--x-axis', `${xAxisProperty}%`);
        };
    };
    
    return ( 
        <div className={styles.carousel}>

            <div className={styles.trendHeader}>
                <h2>Trending Products</h2>

                <div className={styles.headerButtons}>
                    <button onClick={() => moveLeft()}>{arrow1}</button>
                    <button onClick={() => moveRight()}>{arrow2}</button>
                </div>

            </div>

            <div className={styles.trendBody}>

                <div id='trendItems' className={styles.trendItems}>
                    {trendProducts.map((element) => <ProductItem id={element.id} productData={element.data()}/>)}
                </div>

            </div>

        </div>
    );
}

export default ProductCarousel;