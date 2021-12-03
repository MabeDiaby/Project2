import React, {useContext, useEffect} from 'react';
import {CartContext} from '../../../CartContext';
import {blush} from '../Beauty/compnents/Blush'
import BeautyProduct from '../Beauty/compnents/BeautyProduct'
// import {AddedCart} from './AddedCart'

function Cart(props) {
    // // const myKart = useContext(CartContext)
    const {myCart, setMyCart} = useContext(CartContext)
    // // console.log(myKart);
    // useEffect(() => {
    //     console.log(mycart.items);
    // })

    return (
        <>
        <div >
            {myCart.map(item => (<BeautyProduct product={item} />))  }
        </div>
        </>
    );
}

export default Cart;