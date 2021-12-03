import React from 'react';
import {useState, useEffect} from "react";
import BeautyProduct from './BeautyProduct'
// import './Beauty.css'

const url = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lip_liner`

function LipLiner(props) {
    const [lipliner, setLipliner] = useState([])
     
    
    useEffect(() => {
        fetch(url, {
            // brand : this.brand.string,
        })
        .then((res) => res.json())
        .then((res) => setLipliner(res))
        .catch(console.error);
        // console.log(makeup);
    }, [])
    
    return (
        <>
        { <section className="theSection">
            {lipliner.map(product => {
                return (
                    <BeautyProduct product={product} />
                )
            })}
            {console.log(lipliner)}
            
        </section> }
        </>
    );
}

export default LipLiner;