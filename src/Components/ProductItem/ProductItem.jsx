import styles from './ProductItem.module.css';
import placholder from '../../img/osaka2.PNG';

import { Link } from 'react-router-dom';

function ProductItem({productData}) {
    return (  
        //<Link to={`/product/${productData.id}`}>
            <div onClick={() => console.log(productData.id)} className={styles.item}>
                    <img src={placholder} alt="Product"/>

                    <div className={styles.itemBody}>
                        <h4>{productData.name}</h4>

                        <h3>{productData.price}$</h3>
                    </div>
            </div>
       //</Link>

    );
}

export default ProductItem;