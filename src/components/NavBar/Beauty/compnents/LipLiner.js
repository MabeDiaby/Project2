import React from 'react';
import {useState, useEffect} from "react";
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
            {lipliner.map(userInfo => {
                return (
                        <div className="productContainer">
                    <h3 className="product">
                        <img src = {userInfo.api_featured_image} alt="lipliner" />
                        <div className="info">
                        <div className="brand">
                        {userInfo.brand}
                        </div>
                        <div className="name">
                        {userInfo.name}
                        </div>
                        <div className="pice">
                        $ {userInfo.price}
                        </div>
                        <button>Add to Cart</button>
                        </div>
                    </h3>
                    </div>
                )
            })}
            {console.log(lipliner)}
            
        </section> }
        </>
    );
}

export default LipLiner;