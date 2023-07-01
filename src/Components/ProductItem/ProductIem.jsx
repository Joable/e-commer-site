import styles from './ProductItem.module.css';

import placholder from '../../img/osaka2.PNG';

function ProductItem() {
    return (  
        <div className={styles.item}>
            <img src={placholder} alt="Product image"/>

            <div className={styles.itemBody}>
                <h4>Product name</h4>

                <h3>Price</h3>
            </div>
        </div>

    );
}

export default ProductItem;