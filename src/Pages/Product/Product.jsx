import styles from './Product.module.css';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getProductById } from '../../Services/getProducts';

import ProductCarousel from '../../Components/ProductCarousel/ProductCarousel';
import ProductQuantity from '../../Components/ProductQuantity/ProductQuantity';

function Product() {
    const [product, setProduct] = useState({
        details:[],
        images:[]
    });
    const [displayImage, setDisplayImage] = useState("");
    const [isLoading, setIsLoading] = useState(true)
    const {id} = useParams();
    
    useEffect(() => {
        const responseProduct = async () =>{
            try{
                const response = await getProductById(id);

                setProduct(response.data());
                
                setDisplayImage(response.data().images[0]);
                
                setIsLoading(false);
            }catch(e){
                console.log(e)
            }
        };

        responseProduct();
    }, []);

    if(isLoading){
        return(
        <>
            Loading...
        </>
        );
    }else{
        return (
            <>
            <h2 className={styles.productTitle}>{product.name}</h2>
    
            <div className={styles.productBody}>
                <div className={styles.productImages}>
                    <img src={displayImage} alt="Product"/>
    
                    <div className={styles.imageSelector}>
                        {product.images.map((image) => <img 
                            onClick={() => setDisplayImage(image)} 
                            src={image} alt={product.name}
                        />)}
                    </div>
                </div>
    
                <div className={styles.productDescription}>
                    <p>
                        {product.description}
                    </p>
    
                    <div className={styles.productPrice}>
                        <h3>Quantity</h3>
    
                        <ProductQuantity/>
    
                        <h3>{product.price}$</h3>
                    </div>
    
                    <div className={styles.productButtons}>
                        <button className={styles.whiteButton}>ADD TO CART</button>
    
                        <button className={styles.redButton}>BUY NOW</button>
                    </div>
                </div>
            </div>
    
            <div className={styles.detailsSection}>
                {product.details.map((detail) => <div className={styles.productDetails}><h3>{detail.name}</h3> <h4>{detail.description}</h4></div>)}
            </div>
    
            <div className={styles.trend}>
                <ProductCarousel/>
            </div>
            </> 
        );
    }
}

export default Product;