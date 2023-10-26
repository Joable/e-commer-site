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
    const [trendItems, setTrendItems] = useState("");
    const [trendBody, setTrendBody] = useState("");
    const [trendProducts, setTrendProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [trendItemsStyles, setTrendItemsStyles] = useState("");
    //const trendBodyStyles = document.defaultView.getComputedStyle(trendBody);
    let xAxis = 0;

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

        setTrendBody(document.getElementById('trendBody'));
        setTrendItems(document.getElementById('trendItems'));
        
        responseProduct();
    }, []);
    
    useEffect(() => {
        if(trendItems !== "") setTrendItemsStyles(document.defaultView.getComputedStyle(trendItems));
    },[trendItems])
    

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

    const trendDivision = () => {
        switch (document.defaultView.getComputedStyle(trendBody).getPropertyValue("width")) {
            case "500px":
                return [5, 20];
                
            case "200px":
                return [10, 25];
        
            default:
                return [2, 25];
        };
    }
    
    const shift = (type) => {
        const [division, margin] = trendDivision();
        const width = Number.parseFloat(trendItemsStyles.getPropertyValue("width"))
        const shift = width/division;

        if(xAxis <= (width - shift) && type === "Right"){
            xAxis += shift + margin;
    
            trendItems.style.setProperty("--x-axis", `-${xAxis}px`);

        }else  if(xAxis > 0 && type === "Left"){
            xAxis -= shift + margin;
    
            trendItems.style.setProperty("--x-axis", `-${xAxis}px`);
        }
        
    }


    return ( 
        <div className={styles.carousel}>

            <div className={styles.trendHeader}>
                <h2>Trending Products</h2>
            </div>


            <div className={styles.trendWrapper}>
                <button className={styles.trendButtons} onClick={() => shift("Left")}><img src={Left} alt="" /></button>

                <div id='trendBody' className={styles.trendBody}>

                    <div id='trendItems' className={styles.trendItems}>
                        {displayItems()}
                    </div>

                </div>

                <button className={styles.trendButtons} onClick={() => shift("Right")}><img src={Right} alt="" /></button>
            </div>


        </div>
    );
}

export default ProductCarousel;