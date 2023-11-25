import firebase from "../Config/firebase";

const productsCollection = firebase.db.collection('products');

export function getAllProducts(){
    return productsCollection.get();
};

export function getProductById(id){
    return productsCollection.doc(id).get();
};


export function getFilteredProducts(category){
    return productsCollection.where('category', '==', category).get();
};

export function getTrendProducts(){
    return productsCollection.where('trend', '==', true).get();
};

export function getProducts(category){
    if(category === 'all'){
        return getAllProducts();
    }else{
        return getFilteredProducts(category);
    }
};