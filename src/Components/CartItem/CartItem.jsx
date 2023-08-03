import styles from './CartItem.module.css';

import CartQuantity from '../CartQuantity/CartQuantity';
import CartDelete from '../CartDelete/CartDelete';

export default function CartItem({id, product}){
    return(
        <div className={styles.item}>

            <img src={product.image} alt={product.name} />

            <div className={styles.itemDetails}>

                <div className={styles.detailsHeader}>
                    <a href={`/product/${id}`}>
                        <h3>{product.name}</h3>
                    </a>
                            
                        <h3><b>{product.price}</b>$</h3>
                </div>

                <div className={styles.detailsQuantity}>
                    <CartQuantity id={id}/>

                    <CartDelete id={id}/>
                </div>

            </div>

        </div>
    );
}