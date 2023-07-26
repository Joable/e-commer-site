import styles from './CartItem.module.css';

import CartQuantity from '../CartQuantity/CartQuantity';

export default function CartItem({id, product}){
    return(
        <div className={styles.item}>
            <img src={product.image} alt={product.name} />

            <div className={styles.itemDetails}>
                <div className={styles.detailsHeader}>
                    <h4>{product.name}</h4>
                        
                    <h3>{product.price}$</h3>
                </div>

                <div className={styles.detailsQuantity}>
                    <CartQuantity id={id} quantity={product.quantity}/>

                    <button>X</button>
                </div>
            </div>
        </div>
    );
}