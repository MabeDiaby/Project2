import React from 'react';
import {useState, useEffect} from "react";

const url = `https://apidojo-forever21-v1.p.rapidapi.com/products/v2/list?categoryName=sale_women&pageSize=48&pageNumber=1&sortby=0`

function WSale(props) {
    const [sale, setSale] = useState([])

    useEffect(() => {
    fetch(url, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "apidojo-forever21-v1.p.rapidapi.com",
		"x-rapidapi-key": process.env.REACT_APP_WOM_API_KEY
    }
        })
        .then((res) => res.json())
        .then((res) => setSale(res.CatalogProducts))
        .catch(console.err);
        // console.log(makeup);
    }, [])

    return (
        <>
        { <section className="theSectionW">
            {sale.map(brandChild => {
            return (
                    <div className="productContainerW">
                    <h3 className="productW">
                <img src = {brandChild.DefaultProductImage} alt="sale" />
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
    
         {console.log(sale)}
                
            </section> }
            </>
    );
}

export default WSale;