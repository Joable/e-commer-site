import firebase from "../Config/Firebase";

export function setProductQuantity(id, quantity){
    firebase.db.collection('cart').doc(id).update({"quantity": quantity});
}

export function addToProduct(product, originalQuantity){
    return firebase.db.collection('cart').doc(product.id).set({
        name:product.name,
        price:product.price,
        image:product.image,
        quantity:originalQuantity + product.quantity
    });
}

export function addToInventory(product){
    return firebase.db.collection('cart').doc(product.id).set({
        name:product.name,
        price:product.price,
        image:product.image,
        quantity:product.quantity
    });
}