import styles from './ProductDescription.module.css';

import { useState } from 'react';

import ProductQuantity from '../../Components/ProductQuantity/ProductQuantity';
import AddToCart from '../../Components/AddToCart/AddToCart';

export default function ProductDescription({id, product }){
    const [quantity, setQuantity] = useState(1);

    return(
        <div className={styles.description}>
            
            <p>
                {product.description}
            </p>
        
            <div className={styles.productPrice}>
                <h3>Quantity</h3>
        
                <ProductQuantity quantity={quantity} changeQuantity={setQuantity}/>
        
                <h3>{product.price}$</h3>
            </div>
        
            <div className={styles.productButtons}>
                <AddToCart 
                productData ={{
                    id:id,
                    name:product.name,
                    price:product.price,
                    image:product.images[0],
                    quantity: quantity
                }}
                changeQuantity={setQuantity}
                />
        
                <button className={styles.redButton}>BUY NOW</button>
            </div>

        </div>
    );
}