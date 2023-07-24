import styles from './CartItem.module.css';

export default function CartItem({product}){
    return(
        <div className={styles.item}>
            <img src={product.image} alt={product.name} />

            <div className={styles.itemDetails}>
                <div className={styles.detailsHeader}>
                    <h4>{product.name}</h4>
                        
                    <h3>{product.price}$</h3>
                </div>

                <div className={styles.detailsQuantity}>
                    <div>
                    <button>-</button>
                    <p>num</p>
                    <button>+</button>
                    </div>

                    <button>X</button>
                </div>
            </div>
        </div>
    );
}