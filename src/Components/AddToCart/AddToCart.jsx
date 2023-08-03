import styles from './AddToCart.module.css';

import { useContext } from 'react';

import { CartContext } from '../../Context/CartContext';
import { addToProduct, addToInventory } from '../../Services/setCartInventory';

export default function AddToCart({productData, changeQuantity}){
    const {cartProducts, setCartProducts} = useContext(CartContext);
    const id = productData.id;

    const add = () => {
        if(id in cartProducts){
            const originalQuantity = cartProducts[id].quantity;

            addToProduct(productData, originalQuantity).then(() => {

                setCartProducts({
                    ...cartProducts,
                    [id]: {
                        ...productData,
                        quantity: originalQuantity + productData.quantity
                    }
                });

            });

        }else{
            addToInventory(productData).then(() => {

                setCartProducts({
                    ...cartProducts,
                    [id]: {...productData}
                });
            });
        };
            
        changeQuantity(1);
    };

    return(
        <>
        <button onClick={add} className={styles.whiteButton}>ADD TO CART</button>
        </>
    );
}