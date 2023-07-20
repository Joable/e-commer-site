import styles from './Cart.module.css';

import { useState, useEffect } from 'react';


function Cart() {
    const [cartModal, setCartModal] = useState("");
    const [subtotal, setSubtotal] = useState(0);

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

                <div className={styles.cartBody}>
                    Body
                </div>

                <div className={styles.cartFooter}>
                    <div className={styles.subtotal}>
                        <h3>Subtotal</h3>

                        <h4>{subtotal}$</h4>
                    </div>

                    <button> BUY </button>
                </div>

            </div>
        </div>
        </> 
     );
}

export default Cart;