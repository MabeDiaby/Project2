import React, {useContext, useEffect} from 'react';
import CartContext from '../../../CartContext';
import {blush} from '../Beauty/compnents/Blush'
import {AddedCart} from './AddedCart'
import {CartProvider} from '../../../CartContext';

function Cart(props) {
    // // const myKart = useContext(CartContext)
    // const {mycart, setMycart} = useContext(CartContext)
    // // console.log(myKart);
    // useEffect(() => {
    //     console.log(mycart.items);
    // })

    return (
        <CartProvider>
        <div>
            <AddedCart />
            {/* <blush /> */}
            {/* {myKart.mycart.items} */}
        </div>
        </CartProvider>
    );
}

export default Cart;