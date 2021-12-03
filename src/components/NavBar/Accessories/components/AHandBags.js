import React from 'react';
import {useState, useEffect} from "react";

const url = `https://apidojo-forever21-v1.p.rapidapi.com/products/v2/list?categoryName=acc_handbags&pageSize=48&pageNumber=1&sortby=0`

function HandBags(props) {
    const [handbag, setHandbag] = useState([])

    useEffect(() => {
    fetch(url, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "apidojo-forever21-v1.p.rapidapi.com",
		"x-rapidapi-key": process.env.REACT_APP_ACC_API_KEY
    }
        })
        .then((res) => res.json())
        .then((res) => setHandbag(res.CatalogProducts))
        .catch(console.err);
        // console.log(makeup);
    }, [])

    return (
        <>
        { <section className="theSectionA">
            {handbag.map(brandChild => {
            return (
                    <div className="productContainerA">
                    <h3 className="productA">
                <img src = {brandChild.DefaultProductImage} alt="handbag" />
                <div className="infoA">
                <div className="brandA">
                </div>
                <div className="nameA">
                {brandChild.DisplayName}
                </div>
                <div className="priceA">
                $ {brandChild.ListPrice}
                </div>
                <button className="buttonA">Add to Cart</button>
                </div>
            </h3>
            </div>
                    )
                })}
    
         {console.log(handbag)}

            </section> }
            </>
    );
}

export default HandBags;