import styles from './Categories.module.css';

import ProductItem from '../../Components/ProductItem/ProductItem';

import { iterator } from '../../Utils/iterator';

function Categories() {
    return (
        <>
        <div className={styles.categoriesTitle}>
            <h1>Categories</h1>
        </div>

        <div className={styles.categoriesBody}>

            <div className={styles.categoriesButtons}>
                <button>All</button>
                
                <button>Furnitures</button>
                
                <button>Kitchen</button>
                
                <button>Lamps</button>
                
                <button>Clothes</button>
                
                <button>Electronics</button>
                
                <button>Peripherals</button>
            </div>

            <div className={styles.categoriesProducts}>
                {iterator(20).map((element) => <ProductItem productData={element}/>)}
            </div>
        </div>
        </> 
    );
}

export default Categories;