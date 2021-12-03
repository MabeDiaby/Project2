import React from 'react';
import {useState, useEffect} from "react";

const url = `https://apidojo-forever21-v1.p.rapidapi.com/products/v2/list?categoryName=mens_sale&pageSize=48&pageNumber=1&sortby=0`

function MSale(props) {
    const [mSale, setMSale] = useState([])

    useEffect(() => {
    fetch(url, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "apidojo-forever21-v1.p.rapidapi.com",
		"x-rapidapi-key": process.env.REACT_APP_PM_API_KEY
    }
        })
        .then((res) => res.json())
        .then((res) => setMSale(res.CatalogProducts))
        .catch(console.err);
        // console.log(makeup);
    }, [])

    return (
        <>
        { <section className="theSectionM">
            {mSale.map(brandChild => {
            return (
                    <div className="productContainerM">
                    <h3 className="productM">
                <img src = {brandChild.DefaultProductImage} alt="sale" />
                <div className="infoM">
                <div className="brandM">
                </div>
                <div className="nameM">
                {brandChild.DisplayName}
                </div>
                <div className="priceM">
                $ {brandChild.ListPrice}
                </div>
                <button className="buttonM">Add to Cart</button>
                </div>
            </h3>
            </div>
                    )
                })}
    
         {console.log(mSale)}
                
            </section> }
            </>
    );
}

export default MSale;