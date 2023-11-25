import styles from './ImageSelector.module.css';

import firebase from '../../Config/firebase';
import "firebase/compat/storage";

import { useEffect, useState } from 'react';

import LoadingImage from '../LoadingImage/LoadingImage';


export default function ImageSelector({ images }){
    const [isLoading, setIsLoading] = useState(true);
    const [imagesUrls, setImagesUrls] = useState([""]);
    const [displayImage, setDisplayImage] = useState(imagesUrls[0]);

    const storage = firebase.storage();

    /* executes generateImagesUrls on mount */
    useEffect(() => {
         generateImagesUrls();
    }, []);

    /* refreshes the displayImage state when images changes */
    useEffect(() => {
        setDisplayImage(imagesUrls[0]);
    }, [imagesUrls])

    const generateImagesUrls = () => {
        let urls = [];
        
        const getUrls = async () =>{  
            for (let i = 0 ; i < images.length ; i++){
                const pathReference = storage.refFromURL(`${images[i]}`);
                
                const response = await pathReference.getDownloadURL();
                
                urls.push(response);

            };
            
            setImagesUrls(urls);

            setIsLoading(false);
        }

        getUrls();

    }

    if(isLoading){
        return <LoadingImage/>
    }else{
        return(
            <div className={styles.productImages}>

                <div className={styles.image}>
                    <img src={displayImage} alt="Product"/>
                </div>
            
                <div className={styles.imageSelector}>
                    {imagesUrls.map((image) => 
                    <div className={styles.selection}>
                        <img 
                            onClick={() => setDisplayImage(image)} 
                            src={image} 
                            alt={"Product"}
                        />
                    </div>
                    )}
                </div>

            </div>
        )
    }
}