import React from 'react';
import {useState, useEffect} from "react";
import BeautyProduct from './BeautyProduct'

const url = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=mascara`

function Mascara(props) {
    const [mascara, setMascara] = useState([])
     
    
    useEffect(() => {
        fetch(url, {
            // brand : this.brand.string,
        })
        .then((res) => res.json())
        .then((res) => setMascara(res))
        .catch(console.error);
        // console.log(makeup);
    }, [])
    
    return (
        <>
        { <section className="theSection">
            {mascara.map(product => {
                return (
                    <BeautyProduct product={product} />
                )
            })}
            {console.log(mascara)}

        </section>}
        </>
    );
}

export default Mascara;