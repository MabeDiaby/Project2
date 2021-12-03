import React from 'react';
import {useState, useEffect, useContext} from "react";
import {CartContext} from '../../../../CartContext';
import BeautyProduct from './BeautyProduct'

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

    
    return (
        <>
       { <section className="theSection">
            {blush.map(product => {
                return (
                    <BeautyProduct product={product} />
                )
            })}
            {console.log(blush)}

        </section> }
        </>
    );
}

export default Blush;