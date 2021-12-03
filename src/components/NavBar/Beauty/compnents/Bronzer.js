import React from 'react';
import {useState, useEffect} from "react";
import BeautyProduct from './BeautyProduct';


const url = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=bronzer`

function Bronzer(props) {
    const [bronzer, setBronzer] = useState([])
     
    
    useEffect(() => {
        fetch(url, {
            // brand : this.brand.string,
        })
        .then((res) => res.json())
        .then((res) => setBronzer(res))
        .catch(console.error);
        // console.log(makeup);
    }, [])

    return (
        <>
        { <section className="theSection">
            {bronzer.map(product => {
                return (
                        <BeautyProduct product={product} />
                )
            })}
            {console.log(bronzer)}

        </section> }
        </>
    );
}

export default Bronzer;