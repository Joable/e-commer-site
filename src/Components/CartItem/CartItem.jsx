import styles from './CartItem.module.css';

export default function CartItem({product}){
    return(
        <div className={styles.item}>
            <img src={product.image} alt={product.name} />

            <div className={styles.itemDetails}>
                <h4>{product.name}</h4>

                <h3>{product.price}$ {product.quantity}</h3>
            </div>
        </div>
    );
}