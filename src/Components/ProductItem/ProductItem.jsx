import styles from './ProductItem.module.css';

import placholder from '../../img/osaka2.PNG';

function ProductItem({productData}) {
    return (  
        <div className={styles.item}>
            <img src={placholder} alt="Product"/>

            <div className={styles.itemBody}>
                <h4>{productData.name}</h4>

                <h3>{productData.price}$</h3>
            </div>
        </div>

    );
}

export default ProductItem;