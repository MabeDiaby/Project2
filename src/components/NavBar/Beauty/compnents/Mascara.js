import React from 'react';
import {useState, useEffect} from "react";

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
            {mascara.map(userInfo => {
                return (
                        <div className="productContainer">
                    <h3 className="product">
                        <img src = {userInfo.api_featured_image} alt="mascara" />
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
            {console.log(mascara)}

        </section>}
        </>
    );
}

export default Mascara;