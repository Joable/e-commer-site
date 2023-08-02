import firebase from "../Config/Firebase";
import { arrangeInventoryById } from "../Utils/arrangeInventoryById";

export function getCartInventory(){
    return firebase.db.collection('cart').get().then((response) => arrangeInventoryById(response));
}