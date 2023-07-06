import styles from './Product.module.css';
import productImg from '../../img/goatsuba.jpg'

function Product() {
    return (
        <>
        <h2>Product Page</h2>

        <div className={styles.productBody}>
            <img src={productImg} alt="Product"/>

            <div className={styles.productDetails}>
                <p>
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                    Sed eleifend leo pellentesque, pharetra ex eget, tempor risus.
                </p>
                
                <div className={styles.productPrice}>
                    <h3>Quantity</h3>

                    <p>quiantity counter</p>

                    <h3>Price</h3>
                </div>
            </div>
        </div>
        </> 
    );
}

export default Product;