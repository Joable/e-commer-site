import firebase from "../Config/firebase";
import { arrangeInventoryById } from "../Utils/arrangeInventoryById";

export function getCartInventory(){
    return firebase.db.collection('cart').get().then((response) => arrangeInventoryById(response));
}