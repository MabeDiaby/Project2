import React from 'react';
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
                <li><HomePage /></li>
                <li><Women /></li>
                <li><CurvePlus /></li>
                <li><Men /></li>
                <li><Accessories /></li>
                <li><Beauty /></li>
        </div>
        </>
    );
}

export default NavBar;