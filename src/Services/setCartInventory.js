import firebase from "../Config/Firebase";

export function setProductQuantity(id, quantity){
    firebase.db.collection('cart').doc(id).update({"quantity": quantity});
}