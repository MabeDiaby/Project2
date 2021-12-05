import React, {useContext} from 'react';
import { CartContext } from '../../../../CartContext';

function BeautyProduct({product}) {
    
    const {setMyCart} = useContext(CartContext)

    const addToCart = () => {
        setMyCart(state => [...state, product])
    }

    const removeFromCart = () => {
        setMyCart(state => [...state, product])
    }

    return (
        <>
        <div className="productContainer">
                    <h3 className="product">
                        <img src = {product.api_featured_image} alt="bronzer" />
                        <div className="info">
                        <div className="brand">
                        {product.brand}
                        </div>
                        <div className="name">
                        {product.name}
                        </div>
                        <div className="pice">
                        $ {product.price}
                        </div>
                        <button onClick={addToCart}>Add to Cart</button>
                        </div>
                    </h3>
                    </div>
                    </>
    );
}

export default BeautyProduct;