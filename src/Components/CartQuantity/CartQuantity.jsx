import styles from './CartQuantity.module.css';

import { 
    useState,
    useContext
 } from "react";

import { CartContext } from '../../Context/CartContext';

import { setProductQuantity } from '../../Services/setCartInventory';



export default function CartQuantity({id, quantity}){
    const [countQuantity, setCountQuantity] = useState(quantity);
    const {cartProducts, setCartProducts} = useContext(CartContext);

    const add = () => {
        setCountQuantity(countQuantity + 1)
        
        setCartProducts({
            ...cartProducts,
            [id]: {
                ...cartProducts[id],
                quantity: countQuantity + 1
            }
        });
        //setProductQuantity(id, countQuantity + 1);
    };
    const subtract = () => {
        if(countQuantity > 0) {
            setCountQuantity(countQuantity - 1);

            setCartProducts({
                ...cartProducts,
                [id]: {
                    ...cartProducts[id],
                    quantity: countQuantity - 1
                }
            });

            console.log(cartProducts);
            //setProductQuantity(countQuantity - 1);
        };
    };

    return(
        <div className={styles.quantity}>
            <button onClick={subtract}>-</button>

            <p>{countQuantity}</p>
            {console.log(cartProducts)}

            <button onClick={add}>+</button>
        </div>
    );
}