import styles from './AddToCart.module.css';

import { useContext } from 'react';

import { CartContext } from '../../Context/CartContext';

export default function AddToCart({productData, changeQuantity}){
    const {cartProducts, setCartProducts} = useContext(CartContext)

    const add = () => {
        setCartProducts({
            ...cartProducts,
                [productData.id]: {...productData}
        });
    };

    return(
        <>
        {console.log(productData)}
        <button onClick={add} className={styles.whiteButton}>ADD TO CART</button>
        </>
    );
}