import styles from './ImageSelector.module.css';

import { useState } from 'react';


export default function ImageSelector({ images }){
    const [displayImage, setDisplayImage] = useState(images[0]);

    return(
        <div className={styles.productImages}>

            <div className={styles.image}>
                <img src={displayImage} alt="Product"/>
            </div>
        
            <div className={styles.imageSelector}>
                {images.map((image) => <img 
                    onClick={() => setDisplayImage(image)} 
                    src={image} 
                    alt={"Product"}
                />)}
            </div>

        </div>
    )
}