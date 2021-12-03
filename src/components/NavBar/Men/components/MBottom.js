import React from 'react';
import {useState, useEffect} from "react";

const url = `https://apidojo-forever21-v1.p.rapidapi.com/products/v2/list?categoryName=mens_bottom&pageSize=48&pageNumber=1&sortby=0`

function MBottom(props) {
    const [mPants, setMPants] = useState([])

    useEffect(() => {
    fetch(url, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "apidojo-forever21-v1.p.rapidapi.com",
		"x-rapidapi-key": process.env.REACT_APP_PM_API_KEY
    }
        })
        .then((res) => res.json())
        .then((res) => setMPants(res.CatalogProducts))
        .catch(console.err);
        // console.log(makeup);
    }, [])

    return (
        <>
        { <section className="theSectionM">
            {mPants.map(brandChild => {
            return (
                    <div className="productContainerM">
                    <h3 className="productM">
                <img src = {brandChild.DefaultProductImage} alt="pants" />
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
    
         {console.log(mPants)}
                
            </section> }
            </>
    );
}

export default MBottom;