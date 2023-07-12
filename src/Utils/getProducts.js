import firebase from "../Config/Firebase";

export function getAllProducts(){
    return firebase.db.collection('products').get();
}

export function getFilteredProducts(category){
    return firebase.db.collection('products').where('category', '==', category).get();
}