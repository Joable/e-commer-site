import styles from './Categories.module.css';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ProductItem from '../../Components/ProductItem/ProductItem';
import CategorySelector from '../../Components/CategorySelector/CategorySelector';

import { getProducts } from '../../Services/getProducts';


function Categories() {
    const {category} = useParams();
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(()=>{
        const responseProducts = async () =>{
            try{
                const response = await getProducts(category);

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


    return (
        <>
        <div className={styles.categoriesTitle}>
            <h1>Categories</h1>
        </div>

        <div className={styles.categoriesBody}>
            
            <CategorySelector category={category} setIsLoading={setIsLoading} setProducts={setProducts}/>

            <div className={styles.categoriesProducts}>
                {displayProducts()}
            </div>

        </div>
        </> 
    );
}


export default Categories;