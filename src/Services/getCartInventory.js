import firebase from "../Config/Firebase";
import { createInventoryById } from "../Utils/createInventoryById";

export function getCartInventory(){
    return firebase.db.collection('cart').get().then((response) => createInventoryById(response));
}