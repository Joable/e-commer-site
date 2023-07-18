import styles from './Categories.module.css';

import { useEffect, useState } from 'react';

import ProductItem from '../../Components/ProductItem/ProductItem';

import { getProducts } from '../../Services/getProducts';
import { useParams } from 'react-router-dom';


function Categories() {
    const {category} = useParams();
    const categories = ['all', 'furniture', 'kitchen', 'lamps', 'clothes', 'electronics', 'peripherals'];
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [activeCategory, setActiveCategory] = useState(category);

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

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

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

            setActiveCategory(category);

            const response = await getProducts(category);

            setProducts(response.docs);

            setIsLoading(false);
        }catch(e){
            console.log(e);
        };
    };

    const activateButton = (category) => {
        if(activeCategory == category){
            return styles.activeButton;
        }else{
            return styles.inactiveButton;
        };
    };

    return (
        <>
        <div className={styles.categoriesTitle}>
            <h1>Categories</h1>
        </div>

        <div className={styles.categoriesBody}>
            <div className={styles.categoriesButtons}>

                {categories.map((category) => 
                <button 
                className={activateButton(category)} 
                onClick={()=> changeCategory(category)}
                >
                    {capitalizeFirstLetter(category)}
                </button>
                )}

            </div>

            <div className={styles.categoriesProducts}>
                {displayProducts()}
            </div>
        </div>
        </> 
    );
}


export default Categories;