import styles from './Subtotal.module.css';

import { useContext } from 'react';

import { CartContext } from '../../Context/CartContext';

export default function Subtotal(){
    const {cartProducts, setCartProducts} = useContext(CartContext);

    const calculateSubtotal = () => {
        let subtotal = 0;

        Object.keys(cartProducts).forEach((id) => {
            subtotal = subtotal + (cartProducts[id].quantity * cartProducts[id].price);
        });

        return subtotal
    }

    return(
        <div className={styles.subtotal}>
            <h3>Subtotal</h3>

            <h4>{calculateSubtotal()}$</h4>
        </div>
    );
}