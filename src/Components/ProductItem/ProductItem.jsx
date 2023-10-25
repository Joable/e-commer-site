import styles from './ProductItem.module.css';

import firebase from '../../Config/Firebase';
import "firebase/compat/storage";

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Spinner from '../Spinner/Spinner';

function ProductItem({id, productData, images}) {
    const [imageUrl, setImageUrl] = useState("");
    const [gsUrl, setGsUrl] = useState(productData.images[0]);
    const [isLoading, setIsLoading] = useState(true);
    const storage = firebase.storage();

    // refreshes the gs url when the product changes 
    useEffect(() => {
        setGsUrl(productData.images[0])
        
    }, [productData])

    // changes the gs url to an image url

    useEffect(() => { 
        const getUrl = async () =>{  
            const pathReference = storage.refFromURL(`${gsUrl}`);
                
            const response = await pathReference.getDownloadURL();            
            
            setImageUrl(response);

            setTimeout(() => setIsLoading(false), 1500);
        }

        setIsLoading(true);

        getUrl();
    },[gsUrl])

    const loadingImage = () => {
        if(isLoading){
            return <Spinner/>
        }else{
            return <img src={imageUrl} alt={productData.name}/>
        };
    };

    return (  
        <Link className={styles.item} to={`/product/${id}`} replace>
            <div className={styles.itemImage}>
                {loadingImage()}
            </div>

            <div className={styles.itemBody}>
                <h4>{productData.name}</h4>

                <h3>{productData.price}$</h3>
            </div>
       </Link>

    );
}

export default ProductItem;