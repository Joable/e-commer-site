import styles from './Product.module.css';
import productImg from '../../img/goatsuba.jpg';
import productImg2 from '../../img/goatsuba2.png';
import productImg3 from '../../img/goatsuba3.jpg'

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ProductCarousel from '../../Components/ProductCarousel/ProductCarousel';

import { getProductById } from '../../Services/getProducts';

function Product() {
    const [product, setProduct] = useState({details:[]});
    const [image, setImage] = useState(productImg);
    const {id} = useParams();
    
    useEffect(() => {
        const responseProduct = async () =>{
            try{
                 const response = await getProductById(id);

                setProduct(response.data());
            }catch(e){
                console.log(e)
            }
        };

        responseProduct();
    }, []);

    return (
        <>
        <h2 className={styles.productTitle}>{product.name}</h2>

        <div className={styles.productBody}>
            <div className={styles.productImages}>
                <img src={image} alt="Product"/>

                <div className={styles.imageSelector}>
                    <img onClick={() => setImage(productImg)} src={productImg} alt="Product"/>

                    <img onClick={() => setImage(productImg2)} src={productImg2} alt="Product" />

                    <img onClick={() => setImage(productImg3)} src={productImg3} alt="Product" />
                </div>
            </div>

            <div className={styles.productDescription}>
                <p>
                    {product.description}
                </p>

                <div className={styles.productPrice}>
                    <h3>Quantity</h3>

                    <p>quiantity counter</p>

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

export default Product;