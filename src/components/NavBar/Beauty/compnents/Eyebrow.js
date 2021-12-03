import React from 'react';
import {useState, useEffect} from "react";
import BeautyProduct from './BeautyProduct'

const url = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyebrow`

function Eyebrow(props) {
    const [eyebrow, setEyebrow] = useState([])
     
    
    useEffect(() => {
        fetch(url, {
            // brand : this.brand.string,
        })
        .then((res) => res.json())
        .then((res) => setEyebrow(res))
        .catch(console.error);
        // console.log(makeup);
    }, [])

    return (
        <>
        { <section className="theSection">
            {eyebrow.map(product => {
                return (
                    <BeautyProduct product={product} />
                )
            })}
            {console.log(eyebrow)}

        </section> }
        </>
    );
}

export default Eyebrow;