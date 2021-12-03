import React, {useState} from 'react';
import Icon from '../../../footerComponents/icons'
import './CurvePlus.css'
import {Link} from 'react-router-dom'

function CurvePlusNav(props) {
    const [showPlus, setShowPlus] = useState(false);

    const [color, setColor] = React.useState("");

     const styles = {
        textDecoration: 'none', 
        color: 'white',
        cursor: 'pointer'
      }

    return (
        <>
        <div className="PSNav">
            <li className="PSList" id={showPlus ? "hiddensP" : ""}>
            <Link style={{ textDecoration: 'none'}} to="/CurvePlus/NewArrivals">
                <li className="PSNavStuff">New Arrivals</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/CurvePlus/Tops">
                <li className="PSNavStuff">Tops</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/CurvePlus/Dress">
                <li className="PSNavStuff">Dress</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/CurvePlus/Pants">
                <li className="PSNavStuff">Pants</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/CurvePlus/Lingerie">
                <li className="PSNavStuff">Lingerie</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/CurvePlus/OuterWear">
                <li className="PSNavStuff">Outerwear</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/CurvePlus/Sale">
                <li className="PSNavStuff">Sale</li>
            </Link>
            </li>
            <li id= "menusItemP" onClick={() => setShowPlus(!showPlus)} style={styles} className="menusP">
                 <Icon className="far fa-eye" />
                </li>
        </div>
        </>
    );
}

export default CurvePlusNav;