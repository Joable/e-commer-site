import firebase from "../Config/Firebase";

export function getCartInventory(){
    return firebase.db.collection('cart').get();
}