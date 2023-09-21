import styles from './ProductCarousel.module.css';
import Right from './RightArrow.svg';
import Left from './LeftArrow.svg';

import { useEffect, useState } from 'react';

import { getTrendProducts } from '../../Services/getProducts'
import ProductItem from '../ProductItem/ProductItem';
import LoadingProductItem from '../ProductItem/LoadingProductItem';

function ProductCarousel() {
    const [trendProducts, setTrendProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

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