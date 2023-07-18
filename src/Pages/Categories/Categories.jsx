import styles from './Categories.module.css';

import { useEffect, useState } from 'react';

import ProductItem from '../../Components/ProductItem/ProductItem';

import { getProducts } from '../../Services/getProducts';
import { useParams } from 'react-router-dom';


function Categories() {
    const {category} = useParams();
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
        }
    }

    return (
        <>
        <div className={styles.categoriesTitle}>
            <h1>Categories</h1>
        </div>

        <div className={styles.categoriesBody}>
            <div className={styles.categoriesButtons}>
                <button className={activateButton('all')} onClick={()=> changeCategory('all')}>All</button>
                
                <button className={activateButton('furniture')} onClick={()=> changeCategory('furniture')}>Furnitures</button>
                
                <button className={activateButton('kitchen')} onClick={()=> changeCategory('kitchen')}>Kitchen</button>
                
                <button className={activateButton('lamps')} onClick={()=> changeCategory('lamps')}>Lamps</button>
                
                <button className={activateButton('clothes')} onClick={()=> changeCategory('clothes')}>Clothes</button>
                
                <button className={activateButton('electronics')} onClick={()=> changeCategory('electronics')}>Electronics</button>
                
                <button className={activateButton('peripherals')} onClick={()=> changeCategory('peripherals')}>Peripherals</button>
            </div>

            <div className={styles.categoriesProducts}>
                {displayProducts()}
            </div>
        </div>
        </> 
    );
}


export default Categories;