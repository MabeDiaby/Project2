import React from 'react';
import {useState, useEffect} from "react";
import BeautyProduct from './BeautyProduct'

const url = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeshadow`

function Eyeshadow(props) {
    const [eyeshadow, setEyeshadow] = useState([])
     
    
    useEffect(() => {
        fetch(url, {
            // brand : this.brand.string,
        })
        .then((res) => res.json())
        .then((res) => setEyeshadow(res))
        .catch(console.error);
        // console.log(makeup);
    }, [])
    
    return (
        <>
        { <section className="theSection">
            {eyeshadow.map(product => {
                return (
                    <BeautyProduct product={product} />
                )
            })}
            {console.log(eyeshadow)}

        </section> }
        </>
    );
}

export default Eyeshadow;