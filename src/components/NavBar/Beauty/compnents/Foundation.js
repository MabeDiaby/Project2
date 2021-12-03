import React from 'react';
import {useState, useEffect} from "react";

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
            {foundation.map(userInfo => {
                return (
                        <div className="productContainer">
                    <h3 className="product">
                        <img src = {userInfo.api_featured_image} alt="foundation" />
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
            {console.log(foundation)}

        </section> }
        </>
    );
}

export default Foundation;