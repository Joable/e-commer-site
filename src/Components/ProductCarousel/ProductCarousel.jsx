import ProductItem from '../ProductItem/ProductItem';
import styles from './ProductCarousel.module.css'

import { useEffect, useState } from 'react';

import { getTrendProducts } from '../../Services/getProducts'
import LoadingProductItem from '../ProductItem/LoadingProductItem';

function ProductCarousel() {
    const [trendProducts, setTrendProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    let xAxisProperty = 0;
    const arrow1 = "<--", arrow2 = "-->";

    useEffect(() => {
        const responseProduct = async () =>{
            try{
                const response = await getTrendProducts();

                setTrendProducts(response.docs);

                setIsLoading(false);

            }catch(e){
                console.log(e)
            }
        };

        responseProduct();
    }, []);

    const setXAxisValues = () => {
        const widthProperty = document.defaultView.getComputedStyle(document.getElementById('root')).getPropertyValue("width");
        let xAxis = {
            limit: -50,
            shift: 50
        };

        if(parseInt(widthProperty) < 1000 && parseInt(widthProperty) > 500){
            xAxis = { limit: -80, shift: 20};
        }else if(parseInt(widthProperty) < 500){
            xAxis = { limit: -90, shift: 10 };
        };

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

    const displayItems = () => {
        const iterator = [...Array(10).keys()];

        if (isLoading){
            return(
                iterator.map(() => <LoadingProductItem/>)
            );
        } else{
            return(
                trendProducts.map((element) => <ProductItem id={element.id} productData={element.data()}/>)
            )
        }
    }
    
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
                    {displayItems()}
                </div>

            </div>

        </div>
    );
}

export default ProductCarousel;