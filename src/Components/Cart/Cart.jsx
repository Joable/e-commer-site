import styles from './Cart.module.css';

import { useState, useEffect } from 'react';


function Cart() {
    const [cartModal, setCartModal] = useState("");

    useEffect(() => {
        setCartModal(document.getElementById("modal"));
    }, []);

    console.log(cartModal);

    const handleOpen = () => cartModal.style.setProperty("display", "block");
    const handleClose = () => cartModal.style.setProperty("display","none");

    window.onclick = (e) => {
        if(e.target == cartModal) cartModal.style.setProperty("display","none");
    }

    return (
        <>
        <button onClick={handleOpen}>Cart</button>

        <div id='modal' className={styles.cart} >
            <div className={styles.cartContent}>
                <div className={styles.cartHeader}>
                    <p>Your Shopping Cart</p>
                    <button className={styles.close} onClick={handleClose}>X</button>
                </div>
            </div>
        </div>
        </> 
     );
}

export default Cart;