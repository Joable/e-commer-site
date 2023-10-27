import styles from './CategorySelector.module.css';

import { useState } from 'react';

import { getProducts } from '../../Services/getProducts';

export default function CategorySelector({category, setIsLoading, setProducts}){
    const [activeCategory, setActiveCategory] = useState(category);
    const categories = ['all', 'furniture', 'kitchen', 'lamps', 'electronics', 'peripherals'];

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
        
        if(activeCategory === category){
            
            return styles.activeButton;
            
        }else{
            
            return styles.inactiveButton;
        };
    };
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return(

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
    );
    
}