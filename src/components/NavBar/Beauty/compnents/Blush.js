import React from 'react';
import {useState, useEffect, useContext} from "react";
import {CartContext} from '../../../../CartContext'

const url = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush`

export const Blush = (props) => {
    const [blush, setBlush] = useState([])
    
    
    useEffect(() => {
        fetch(url, {
            // brand : this.brand.string,
        })
        .then((res) => res.json())
        .then((res) => setBlush(res))
        .catch(console.error);
        // console.log(makeup);
    }, [])
    
    // const [cart, setCart] = useContext(CartContext)

    // const addToCart = () => {
    //     const myCart = {name: props.userInfo.name, price: props.userInfo.price}

    //     setCart(curr => [...curr, myCart]);
    // }
    
    return (
        <>
       { <section className="theSection">
            {blush.map(userInfo => {
                return (
                    <div className="productContainer">
                            <h3 className="product">
                        <img src = {userInfo.api_featured_image} alt="blush" />
                        <div className="info">
                        <div className="brand">
                        {userInfo.brand}
                        </div>
                        <div className="name">
                        {userInfo.name}
                        </div>
                        <div className="price">
                        $ {userInfo.price}
                        </div>
                        <button /*onClick={addToCart}*/>Add to Cart</button>
                        </div>
                    </h3>
                    </div>
                )
            })}
            {console.log(blush)}

        </section> }
        </>
    );
}

export default Blush;