import styles from './Product.module.css';

import firebase from '../../Config/Firebase';
import "firebase/compat/storage";

import { useParams } from 'react-router-dom';
import { 
    useEffect, 
    useState 
} from 'react';

import { getProductById } from '../../Services/getProducts';

import ProductCarousel from '../../Components/ProductCarousel/ProductCarousel';
import ImageSelector from '../../Components/ImageSelector/ImageSelector';
import ProductDescription from '../../Components/ProductDescription/ProductDescription';
import LoadingProduct from '../../Components/LoadingProduct/LoadingProduct';

function Product() {
    const [product, setProduct] = useState({
        details:[],
        images:[]
    });
    const [isLoading, setIsLoading] = useState(true);
    const [imagesUrls, setImagesUrls] = useState([""]);

    const storage = firebase.storage();
    const {id} = useParams();
    
    /* executes responseProduct on mount */
    useEffect(() => {
        responseProduct();
    }, []);

    /* executes responseProduct whe the id changes */
    useEffect(() => {
        setIsLoading(true)
        
        backToTop();

        responseProduct();
    }, [id]);

    useEffect(() => {
        generateImagesUrls();

    },[product])
    
    useEffect(() => console.log(imagesUrls), [imagesUrls])
    
    const backToTop = () => document.documentElement.scrollTop = 0;
    
    const responseProduct = async () =>{
        try{
            const response = await getProductById(id);
            
            setProduct(response.data());
            
        }catch(e){
            console.log(e)
        }
    };
    
    const generateImagesUrls = () => {
        let urls = [];
        
        const getUrls = async () =>{  
            for (let i = 0 ; i < product.images.length ; i++){
                const pathReference = storage.refFromURL(`${product.images[i]}`);
                
                const response = await pathReference.getDownloadURL();
                
                urls.push(response);
                
                console.log(urls)
            }
            
            setImagesUrls(urls)
            setIsLoading(false);
        }

        getUrls();

    }

    const displayProduct = () => {
        if(isLoading){
            return(
                <>
                <LoadingProduct/>
                </>
            );
        }else{
            return(
                <>
                <section className={styles.productSection}>

                    <h2 className={styles.productTitle}>{product.name}</h2>
            
                    <div className={styles.productBody}>
                        <ImageSelector images={imagesUrls}/>
            
                        <ProductDescription product={product} id={id}/>
                    </div>
                
                </section>
                
                <section className={styles.details}>

                    <div className={styles.detailsWrapper}>
                        {product.details.map((detail) => <div className={styles.productDetails}><h3>{detail.name}</h3> <h4>{detail.description}</h4></div>)}
                    </div>
                
                </section>
                </>
            );
        };
    }

    return (
        <div className={styles.product}>

            {displayProduct()}

            <div className={styles.trend}>
                <ProductCarousel/>
            </div>

        </div> 
    );
}

export default Product;