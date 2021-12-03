import React from 'react';
import {useState, useEffect} from "react";
import BeautyProduct from './BeautyProduct'

const url = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner`

function Eyeliner(props) {
    const [eyeliner, setEyeliner] = useState([])
     
    
    useEffect(() => {
        fetch(url, {
            // brand : this.brand.string,
        })
        .then((res) => res.json())
        .then((res) => setEyeliner(res))
        .catch(console.error);
        // console.log(makeup);
    }, [])
    return (
        <>
        { <section className="theSection">
            {eyeliner.map(product => {
                return (
                    <BeautyProduct product={product} />
                )
            })}
            {console.log(eyeliner)}
            
        </section> }
        </>
    );
}

export default Eyeliner;