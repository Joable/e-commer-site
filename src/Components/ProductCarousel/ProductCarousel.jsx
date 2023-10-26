import styles from './ProductCarousel.module.css';
import Right from './RightArrow.svg';
import Left from './LeftArrow.svg';

import { 
    useEffect,
    useState 
    } from 'react';

import { getTrendProducts } from '../../Services/getProducts'
import ProductItem from '../ProductItem/ProductItem';
import LoadingProductItem from '../ProductItem/LoadingProductItem';

function ProductCarousel() {
    const [trendItemsStyles, setTrendItemsStyles] = useState("");
    const [trendBodyStyles, setTrendBodyStyles] = useState("");
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

        setTrendBodyStyles(document.defaultView.getComputedStyle(document.getElementById('trendBody')));
        setTrendItemsStyles(document.defaultView.getComputedStyle(document.getElementById('trendItems')));

        responseProduct();
    }, []);

    
    useEffect(() => {
        if(trendItemsStyles !== ""){
            console.log(trendItemsStyles.getPropertyValue("width"));
            console.log(trendBodyStyles.getPropertyValue("width"))

        }
    },[trendItemsStyles, trendBodyStyles])

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
    
    const shift = () => {
        const trendItemsLenght = Number.parseFloat(trendItemsStyles.getPropertyValue("width"));
        const half = trendItemsLenght/2;
        
        document.getElementById('trendItems').style.width = `-${half}`

        console.log(document.getElementById('trendItems').style.width)
    }

    return ( 
        <div className={styles.carousel}>

            <div className={styles.trendHeader}>
                <h2>Trending Products</h2>
            </div>


            <div className={styles.trendWrapper}>
                <button className={styles.trendButtons}><img src={Left} alt="" /></button>

                <div id='trendBody' className={styles.trendBody}>

                    <div id='trendItems' className={styles.trendItems}>
                        {displayItems()}
                    </div>

                </div>

                <button className={styles.trendButtons} onClick={shift}><img src={Right} alt="" /></button>
            </div>


        </div>
    );
}

export default ProductCarousel;