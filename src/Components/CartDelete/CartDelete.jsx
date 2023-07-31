import styles from './CartDelete.module.css';

import { useContext } from 'react';

import { CartContext } from '../../Context/CartContext';
import { deleteProduct } from '../../Services/setCartInventory';

export default function CartDelete({id, hideItem}){
    const {cartProducts, setCartProducts} = useContext(CartContext);

    const handleDelete = () => {
        hideItem(true);

        deleteProduct(id).then( () =>{
            let newCart = {...cartProducts};

            delete newCart[id];

            setCartProducts(newCart);
        });
    };

    return(
        <button onClick={handleDelete}>X</button>
    );
}