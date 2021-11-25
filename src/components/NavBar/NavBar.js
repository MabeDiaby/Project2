import "./NavBar.css"
import React, {useState} from 'react';
import {Link} from "react-router-dom";


// import

/* How to set text decoration:
// https://stackoverflow.com/questions/37669391/how-to-get-rid-of-underline-for-link-component-of-react-router */

function NavBar(props) {

    const [showLinks, setShowLinks] = useState(false);


    return (
        <>
        <div className="navbar">
            <h2>Company Name</h2>
            <ul id={showLinks ? "hidden" : ""}>
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
            </ul>
        <li className="buttons" onClick={() => setShowLinks(!showLinks)}>☰</li>
        </div>
        </>
    );
}

export default NavBar;