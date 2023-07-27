import styles from './Cart.module.css';

import { 
    useState, 
    useEffect,
    useContext
} from 'react';

import { CartContext } from '../../Context/CartContext';

import CartItem from '../CartItem/CartItem';


export default function Cart() {
    const [cartModal, setCartModal] = useState("");
    const [subtotal, setSubtotal] = useState(0);
    const {cartProducts, setCartProducts} = useContext(CartContext);

    useEffect(() => setCartModal(document.getElementById('modal')), []);

    const handleOpen = () => {
        cartModal.style.setProperty("display", "block")
        document.body.style.setProperty("overflow", "hidden");
    };

    const handleClose = () => {
        cartModal.style.setProperty("display", "none")
        document.body.style.setProperty("overflow", "auto");
    };

    window.onclick = (e) => {
        if(e.target === cartModal) {
            handleClose();
        };
    };

    const displayCartItems = () => {
        let productsArray = [];

        Object.keys(cartProducts).forEach((key) => productsArray.push(
            <CartItem 
            id={key} 
            product={cartProducts[key]}
            />
        ));

        return productsArray;
    };

    return (
        <>
        <button onClick={handleOpen}>Cart</button>

        <div id='modal' className={styles.modal} >
            <div className={styles.cartContent}>
                <div className={styles.cartHeader}>
                    <p>Your Shopping Cart</p>
                    <button className={styles.close} onClick={handleClose}>X</button>
                </div>

                <div className={styles.cartBody}>
                    {displayCartItems()}
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
