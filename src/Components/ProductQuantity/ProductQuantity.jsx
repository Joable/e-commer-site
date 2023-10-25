import styles from './ProductQuantity.module.css';

export default function ProductQuantity({quantity, changeQuantity}){

    const add = () => {
        changeQuantity(quantity + 1);
    };
    const substract = () => {
        if(quantity > 1) changeQuantity(quantity - 1);
    };
    
    return(
        <div className={styles.count}>
            <button onClick={substract}>-</button>

            <div className={styles.countDisplay}>
                <h3>{quantity}</h3>
            </div>

            <button onClick={add}>+</button>
        </div>
    );
}