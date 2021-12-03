import React from 'react';
import {useState, useEffect} from "react";
import BeautyProduct from './BeautyProduct'

const url = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish`

function NailPolish(props) {
    const [nailpolish, setNailpolish] = useState([])
     
    
    useEffect(() => {
        fetch(url, {
            // brand : this.brand.string,
        })
        .then((res) => res.json())
        .then((res) => setNailpolish(res))
        .catch(console.error);
        // console.log(makeup);
    }, [])
    
    return (
        <>
        { <section className="theSection">
            {nailpolish.map(product => {
                return (
                    <BeautyProduct product={product} />
                )
            })}
            {console.log(nailpolish)}

        </section> }
        </>
    );
}

export default NailPolish;