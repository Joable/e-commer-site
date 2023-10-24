import styles from './Home.module.css';

import HomeHeader from "../../Components/HomeHeader/HomeHeader";
import Separator from "../../Components/Separator/Separator";
import ProductCarousel from "../../Components/ProductCarousel/ProductCarousel";

import { createDocument } from '../../Utils/createDocument';


import firebase from '../../Config/Firebase';
import "firebase/compat/storage";
import { getStorage, ref, getDownloadURL } from "firebase/storage"
import { useEffect, useState } from 'react';

function Home() {
    const kitchenSeparator = {
        title: "Kitchen utensils",
        text: "Get the best utensils for your kitchen",
        image:'../../img/kitchen.jpg',
        url:'/categories/kitchen',
        reverse: false
    };
    const lampsSeparator = {
        title: "Huge variety of lamps",
        text: "Search through our catalog of lamps and find the one that fits with you",
        image:'../../img/lamps.jpg',
        url:'/categories/lamps',
        reverse: true
    };
    const [imgUrl, setImgUrl] = useState("");

    const storage = firebase.storage()
    const pathReference = storage.refFromURL("gs://e-commerce-fcdf9.appspot.com/Peripherals/AKG KG92/AKG1.PNG");

    useEffect(() => {
        
        const response = async () => {
            try{
               const response = await pathReference.getDownloadURL()   

               setImgUrl(response)
            }catch(e){
                console.log(e)
            }
        }

        response();
    
    } ,[]);

    return ( 
        <>
        <section className={styles.homeHeader}>
            <HomeHeader/>
        
            <Separator parameters={kitchenSeparator}/>
        </section>
        
        <section className={styles.productCarousel}>
            <ProductCarousel/>
        </section>
        
        <section className={styles.lampSeparator}>
            <Separator parameters={lampsSeparator}/>
        </section>
        </>
    );
}

export default Home;