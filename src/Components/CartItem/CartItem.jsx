import styles from './CartItem.module.css';

import firebase from '../../Config/Firebase';
import "firebase/compat/storage";

import {
    useEffect,
    useState
} from 'react';

import CartQuantity from '../CartQuantity/CartQuantity';
import CartDelete from '../CartDelete/CartDelete';

export default function CartItem({id, product}){
    const [imageUrl, setImageUrl] = useState("");
    const storage = firebase.storage();

    useEffect(() => { 
        const getUrl = async () =>{  
            const pathReference = storage.refFromURL(`${product.image}`);
                
            const response = await pathReference.getDownloadURL();            
            
            setImageUrl(response);
        }

        getUrl();
    },[])


    return(
        <div className={styles.item}>

            <div className={styles.itemImage}>
                <img src={imageUrl} alt={product.name} />
            </div>

            <div className={styles.itemDetails}>

                <div className={styles.detailsHeader}>
                    <a href={`/product/${id}`}>
                        <h3>{product.name}</h3>
                    </a>
                            
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