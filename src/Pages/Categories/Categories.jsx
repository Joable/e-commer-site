import styles from './Categories.module.css';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getProducts } from '../../Services/getProducts';

import CategorySelector from '../../Components/CategorySelector/CategorySelector';
import LoadingProductItem from '../../Components/ProductItem/LoadingProductItem';
import Pagination from '../../Components/Pagination/Pagination';


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
        const iterator = [...Array(4).keys()];

        if(isLoading){
            return(
                <div className={styles.loadingItems}>
                    {iterator.map(() => <LoadingProductItem/>)}
                </div>
            );
        }else{
            return(
                <Pagination products={products}/>
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