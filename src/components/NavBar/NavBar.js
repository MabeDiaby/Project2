import "./NavBar.css"
import React, {useState, useContext} from 'react';
import {NavLink, Link} from "react-router-dom";
import Icon from "../../footerComponents/icons";
import {CartContext} from '../../CartContext'

// import

/* How to set text decoration:
// https://stackoverflow.com/questions/37669391/how-to-get-rid-of-underline-for-link-component-of-react-router */

function NavBar(props) {

    const [showLinks, setShowLinks] = useState(false);

    const {myCart} = useContext(CartContext);

    return (
        <>
        <div className="navbar">
            <h2 className="companyName">M D Fashion</h2>
            <ul className = "navbars" id={showLinks ? "hidden" : ""}>
            <Link style={{ textDecoration: 'none'}} to="/">
                <li className="navStuff">Home</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/Women">
                <li className="navStuff">Women</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/CurvePlus">
                <li className="navStuff">Curve + Plus</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/Men">
                <li className="navStuff">Men</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/Accessories">
                <li className="navStuff">Accessories</li>    
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/Beauty">
                <li className="navStuff">Beauty</li>
            </Link>
            <Link id="mycart" style={{ textDecoration: 'none', color: 'White', hover: 'Black'}} to="/Cart">
            <i class="material-icons-outlined">shopping_cart
            </i>
            <span className="cartAdd">{myCart.length}</span>
            </Link>
            </ul>
        <li className="menu" onClick={() => setShowLinks(!showLinks)}>☰</li>
        </div>
        </>
    );
}

export default NavBar;