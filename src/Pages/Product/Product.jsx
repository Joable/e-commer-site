import styles from './Product.module.css';
import productImg from '../../img/goatsuba.jpg';
import productImg2 from '../../img/goatsuba2.png';
import productImg3 from '../../img/goatsuba3.jpg'

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ProductCarousel from '../../Components/ProductCarousel/ProductCarousel';

import { getProductById } from '../../Utils/getProducts';

function Product() {
    const [product, setProduct] = useState({});
    const defaultId = "nQmNSwLXnb1JdqWn4kG5";
    const {urlId} = useParams()
    let id = ""
    
    useEffect(() => {
        const responseProduct = async () =>{
            try{
                (!urlId) ? id = defaultId : id = urlId;

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
                <img src={productImg} alt="Product"/>

                <div className={styles.imageSelector}>
                    <img src={productImg} alt="Product"/>

                    <img src={productImg2} alt="Product" />

                    <img src={productImg3} alt="Product" />
                </div>
            </div>

            <div className={styles.productDetails}>
                <p>
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                    Sed eleifend leo pellentesque, pharetra ex eget, tempor risus.
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

        <div className={styles.trend}>
            <ProductCarousel/>
        </div>
        </> 
    );
}

export default Product;