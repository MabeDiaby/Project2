import React from 'react';
import {useState, useEffect} from "react";

const url = `https://apidojo-forever21-v1.p.rapidapi.com/products/v2/list?categoryName=plus_size_tops&pageSize=48&pageNumber=1&sortby=0`

function PSTops(props) {
    const [pTops, setPTops] = useState([])

    useEffect(() => {
    fetch(url, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "apidojo-forever21-v1.p.rapidapi.com",
		"x-rapidapi-key": process.env.REACT_APP_PM_API_KEY
    }
        })
        .then((res) => res.json())
        .then((res) => setPTops(res.CatalogProducts))
        .catch(console.err);
        // console.log(makeup);
    }, [])

    return (
        <>
        { <section className="theSectionC">
            {pTops.map(brandChild => {
            return (
                    <div className="productContainerC">
                    <h3 className="productC">
                <img src = {brandChild.DefaultProductImage} alt="plus" />
                <div className="infoC">
                <div className="brandC">
                </div>
                <div className="nameC">
                {brandChild.DisplayName}
                </div>
                <div className="priceC">
                $ {brandChild.ListPrice}
                </div>
                <button className="buttonC">Add to Cart</button>
                </div>
            </h3>
            </div>
                    )
                })}
    
         {console.log(pTops)}
                
            </section> }
            </>
    );
}

export default PSTops;