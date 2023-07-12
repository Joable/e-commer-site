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
            if(category){
                const response = await getFilteredProducts(category);

                setProducts(response.docs);
            }else{
                const response = await getAllProducts();

                setProducts(response.docs);
            };
        }catch(e){
            console.log(e);
        };
    };

    return (
        <>
        <div className={styles.categoriesTitle}>
            <h1>Categories</h1>
        </div>

        <div className={styles.categoriesBody}>

            <div className={styles.categoriesButtons}>
                <button onClick={()=> changeCategory('')}>All</button>
                
                <button onClick={()=> changeCategory('furniture')}>Furnitures</button>
                
                <button onClick={()=> changeCategory('kitchen')}>Kitchen</button>
                
                <button onClick={()=> changeCategory('lamps')}>Lamps</button>
                
                <button onClick={()=> changeCategory('clothes')}>Clothes</button>
                
                <button onClick={()=> changeCategory('electronics')}>Electronics</button>
                
                <button onClick={()=> changeCategory('peripherals')}>Peripherals</button>
            </div>

            <div className={styles.categoriesProducts}>
                {products.map((elements) => <ProductItem productData={elements.data()}/>)}
            </div>
        </div>
        </> 
    );
}

export default Categories;