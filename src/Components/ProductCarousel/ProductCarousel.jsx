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
    const [trendBodyStyles, setTrendBodyStyles] = useState("");
    let lastBodyWidth = "";
    let xAxis = 0;
    
    /* fetches the products data and updates the id states of trend body and items on mount */
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
    
    /* updates the state of trendItemsStyles when trendItems changes */
    useEffect(() => {
        if(trendItems !== "") {
            setTrendItemsStyles(document.defaultView.getComputedStyle(trendItems));
        
            setTrendBodyStyles(document.defaultView.getComputedStyle(trendBody));
        };
    },[trendItems]);

    useEffect(() => {
        if(trendBodyStyles !== "") lastBodyWidth = trendBodyStyles.getPropertyValue("width");
    })
    
    
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
    };

    const widthCheck = (width) => {
        if(lastBodyWidth != width) {
            xAxis = 0;
        
            lastBodyWidth = width;

            trendItems.style.setProperty("--x-axis", `-${xAxis}px`);
        };
    };
         
    const trendDivision = () => {
        switch (trendBodyStyles.getPropertyValue("width")) {
            case "500px":
                widthCheck(520);          

                return [5, 20];
                 
            case "200px":
                widthCheck(225);

                return [10, 25];
                     
                default:
                    widthCheck(1025);

                    return [2, 25];
            };
    };
                 
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
        };

        console.log(xAxis)
        
    };
    
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