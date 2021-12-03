import React from 'react';
import {useState, useEffect} from "react";
import BeautyProduct from './BeautyProduct'

const url = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation`

function Foundation(props) {
    const [foundation, setFoundation] = useState([])
     
    
    useEffect(() => {
        fetch(url, {
            // brand : this.brand.string,
        })
        .then((res) => res.json())
        .then((res) => setFoundation(res))
        .catch(console.error);
        // console.log(makeup);
    }, [])
    
    return (
        <>
        { <section className="theSection">
            {foundation.map(product => {
                return (
                    <BeautyProduct product={product} />
                )
            })}
            {console.log(foundation)}

        </section> }
        </>
    );
}

export default Foundation;