import styles from './Cart.module.css';

import { 
    useState, 
    useEffect
} from 'react';

import { getCartInventory } from '../../Services/getCartInventory';

import CartItem from '../CartItem/CartItem';


export default function Cart() {
    const [cartProducts, setCartPorducts] = useState([]);
    const [cartModal, setCartModal] = useState("");
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        const getData = async () => {
            try{
                const response = await getCartInventory();

                setCartPorducts(response.docs);
            }catch(e){
                console.log(e);
            };
        };

        setCartModal(document.getElementById('modal'));
        getData();
    }, []);

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
            cartModal.style.setProperty("display", "none")
            document.body.style.setProperty("overflow", "auto");
        };
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
                    {cartProducts.map((product) => <CartItem id={product.id} product={product.data()}/>)}
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
