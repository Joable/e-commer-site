import styles from './Categories.module.css';

import { useEffect, useState } from 'react';

import ProductItem from '../../Components/ProductItem/ProductItem';

import { getAllProducts, getFilteredProducts } from '../../Services/getProducts';


function Categories() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        const responseProducts = async () =>{
            try{
                const response = await getAllProducts();

                setProducts(response.docs);

                setIsLoading(false)
            }catch(e){
                console.log(e);
            };
        };

        responseProducts();
    }, []);

    const displayProducts = () =>{
        if(isLoading){
            return(
                <>
                    Loading...
                </>
            );
        }else{
            return(
            products.map((element) => <ProductItem id={element.id} productData={element.data()}/>)
            )
        }
    }

    const changeCategory = async (category) => {
        try{
            setIsLoading(true);

            if(category){
                const response = await getFilteredProducts(category);

                setProducts(response.docs);
            }else{
                const response = await getAllProducts();

                setProducts(response.docs);
            };

            setIsLoading(false);
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
                {displayProducts()}
            </div>
        </div>
        </> 
    );
}


export default Categories;