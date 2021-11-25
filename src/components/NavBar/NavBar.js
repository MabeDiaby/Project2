import React from 'react';
import {Link} from "react-router-dom"
import Women from './Women';
import CurvePlus from './CurvePlus';
import Men from './Men';
import Accessories from './Accessories';
import Beauty from './Beauty';
import HomePage from './HomePage';


// import


function NavBar(props) {
    return (
        <>
        <div className="navbar">
            <h2>Company Name</h2>
            <Link to="/">
                <li><HomePage /></li>
            </Link>
            <Link to="/Women">
                <li><Women /></li>
            </Link>
            <Link to="/CurvePlus">
                <li><CurvePlus /></li>
            </Link>
            <Link to="/Men">
                <li><Men /></li>
            </Link>
            <Link to="/Accessories">
                <li><Accessories /></li>    
            </Link>
            <Link to="/Beauty">
                <li><Beauty /></li>
            </Link>
        </div>
        </>
    );
}

export default NavBar;