import React from 'react';
import {useState, useEffect} from "react";

const url = `https://apidojo-forever21-v1.p.rapidapi.com/products/v2/list?categoryName=outerwear_coats_and_jackets&pageSize=48&pageNumber=1&sortby=0`

function WCoatsJackets(props) {
    const [coat, setCoat] = useState([])

    useEffect(() => {
    fetch(url, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "apidojo-forever21-v1.p.rapidapi.com",
		"x-rapidapi-key": process.env.REACT_APP_WOM_API_KEY
    }
        })
        .then((res) => res.json())
        .then((res) => setCoat(res.CatalogProducts))
        .catch(console.err);
        // console.log(makeup);
    }, [])

    return (
        <>
        { <section className="theSectionW">
            {coat.map(brandChild => {
            return (
                    <div className="productContainerW">
                    <h3 className="productW">
                <img src = {brandChild.DefaultProductImage} alt="coat" />
                <div className="infoW">
                <div className="brandW">
                </div>
                <div className="nameW">
                {brandChild.DisplayName}
                </div>
                <div className="priceW">
                $ {brandChild.ListPrice}
                </div>
                <button className="buttonW">Add to Cart</button>
                </div>
            </h3>
            </div>
                    )
                })}
    
         {console.log(coat)}
                
            </section> }
            </>
    );
}

export default WCoatsJackets;