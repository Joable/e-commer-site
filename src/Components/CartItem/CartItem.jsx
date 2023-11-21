import styles from './CartItem.module.css';

import firebase from '../../Config/Firebase';
import "firebase/compat/storage";

import {
    useEffect,
    useState
} from 'react';

import { Link } from 'react-router-dom';

import CartQuantity from '../CartQuantity/CartQuantity';
import CartDelete from '../CartDelete/CartDelete';
import Spinner from '../Spinner/Spinner';

export default function CartItem({id, product, image}){
    const [imageUrl, setImageUrl] = useState("");
    const [isLoading, setIsLoading] = useState(true)
    const storage = firebase.storage();

    useEffect(() => { 
        const getUrl = async () =>{  
            const pathReference = storage.refFromURL(`${image}`);
                
            const response = await pathReference.getDownloadURL();            
            
            setImageUrl(response);

            setIsLoading(false);
        };

        setIsLoading(true);

        getUrl();
    },[image])

    const loadingImage = () => {
        if(isLoading){
            return <Spinner/>
        }else{
            return <img src={imageUrl} alt={product.name} />
        }
    }

    return(
        <div className={styles.item}>

            <div className={styles.itemImage}>
                {loadingImage()}
            </div>

            <div className={styles.itemDetails}>

                <div className={styles.detailsHeader}>
                    <h3>{product.name}</h3>
                            
                    <h3><b>{product.price}</b>$</h3>
                </div>

                <div className={styles.detailsQuantity}>
                    <CartQuantity id={id}/>

                    <CartDelete id={id}/>
                </div>

            </div>

        </div>
    );
}