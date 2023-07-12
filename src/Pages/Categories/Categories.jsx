import styles from './Categories.module.css';

import { useEffect, useState } from 'react';

import ProductItem from '../../Components/ProductItem/ProductItem';

import { getAllProducts, getFilteredProducts } from '../../Utils/getProducts';


function Categories() {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const responseProducts = async () =>{
            try{
                const response = await getAllProducts();

                setProducts(response.docs);

            }catch(e){
                console.log(e);
            };
        };

        responseProducts();
    }, []);

    const changeCategory = async (category) => {
        try{
            const response = await getFilteredProducts(category);

            setProducts(response.docs);

            console.log(products)
        }catch(e){
            console.log(e);
        }
    };

    return (
        <>
        <div className={styles.categoriesTitle}>
            <h1>Categories</h1>
        </div>

        <div className={styles.categoriesBody}>

            <div className={styles.categoriesButtons}>
                <button>All</button>
                
                <button onClick={()=> changeCategory('furnitures')}>Furnitures</button>
                
                <button>Kitchen</button>
                
                <button>Lamps</button>
                
                <button>Clothes</button>
                
                <button>Electronics</button>
                
                <button>Peripherals</button>
            </div>

            <div className={styles.categoriesProducts}>
                {products.map((elements) => <ProductItem productData={elements.data()}/>)}
            </div>
        </div>
        </> 
    );
}

export default Categories;