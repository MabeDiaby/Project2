import React from 'react';
import {useState, useEffect} from "react";

const url =`https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US`

function Shoes(props) {
    // const [show, setShow] = useState({brands: [{children : []}]})
    const [show, setShow] = useState([])
    
    useEffect(() => {

    fetch(url, {
        "method": "GET",
	    "headers": {
		    "x-rapidapi-host": "asos2.p.rapidapi.com",
		    "x-rapidapi-key": process.env.REACT_APP_PM_API_KEY
        }
    })
    .then((res) => res.json())
    .then((res) => setShow(res.products))
    .catch(console.err);
    // console.log(makeup);
}, [])

return (
    <>

    { <section className="theSectionM">
        {show.map(brandChild => {
        return (
                <div className="productContainerM">
                <h3 className="productM">
            <img src = {`https://${brandChild.imageUrl}`} alt="shoes" />
            <div className="infoM">
            <div className="brandM">
            {brandChild.brand}
            </div>
            <div className="nameM">
            {brandChild.name}
            </div>
            <div className="priceM">
            {brandChild.price.current.text}
            </div>
            <button className="buttonM">Add to Cart</button>
            </div>
        </h3>
        </div>
                )
            })}

     {console.log(show)}
            
        </section> }
        </>
    );
}

export default Shoes;