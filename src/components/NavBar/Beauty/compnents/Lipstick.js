import React from 'react';
import {useState, useEffect} from "react";
import BeautyProduct from './BeautyProduct'

const url = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick`

function Lipstick(props) {
    const [lipstick, setLipstick] = useState([])
    
    useEffect(() => {
        fetch(url, {
            // brand : this.brand.string,
        })
        .then((res) => res.json())
        .then((res) => setLipstick(res))
        .catch(console.error);
        // console.log(makeup);
    }, [])
    
    return (
        <>
        { <section className="theSection">
            {lipstick.map(product => {
                return (
                    <BeautyProduct product={product} />
                )
            })}
            {console.log(lipstick)}
            
        </section> }
        </>
    );
}

export default Lipstick;