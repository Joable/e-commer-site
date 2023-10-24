import styles from './ImageSelector.module.css';

import firebase from '../../Config/Firebase';
import "firebase/compat/storage";

import { useEffect, useState } from 'react';


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

                console.log(urls)
            };
            
            setImagesUrls(urls);

            setIsLoading(false);
        }

        getUrls();

    }

    if(isLoading){
        return <>Loadinger</>
    }else{
        return(
            <div className={styles.productImages}>

                <div className={styles.image}>
                    <img src={displayImage} alt="Product"/>
                </div>
            
                <div className={styles.imageSelector}>
                    {imagesUrls.map((image) => <img 
                        onClick={() => setDisplayImage(image)} 
                        src={image} 
                        alt={"Product"}
                    />)}
                </div>

            </div>
        )
    }
}