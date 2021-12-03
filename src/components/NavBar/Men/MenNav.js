import React, {useState} from 'react';
import Icon from '../../../footerComponents/icons'
import './Men.css'
import {Link} from 'react-router-dom'

function MenNav(proM) {
    const [showMen, setShowMen] = useState(false);

    const [color, setColor] = React.useState("");

     const styles = {
        textDecoration: 'none', 
        color: 'white',
        cursor: 'pointer'
      }

    return (
        <>
        <div className="MNav">
            <li className="MList" id={showMen ? "hiddensM" : ""}>
            <Link style={{ textDecoration: 'none'}} to="/Men/NewArrivals">
                <li className="MNavStuff">New Arrivals</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/Men/Tops">
                <li className="MNavStuff">Tops</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/Men/Jeans">
                <li className="MNavStuff">Jeans</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/Men/Pants">
                <li className="MNavStuff">Pants</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/Men/Shoes">
                <li className="MNavStuff">Shoes</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/Men/Accessories">
                <li className="MNavStuff">Accessories</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/Men/Coats_Jackets">
                <li className="MNavStuff">Coats & Jackets</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/Men/Sale">
                <li className="MNavStuff">Sale</li>
            </Link>
            </li>
            <li id= "menusItemM" onClick={() => setShowMen(!showMen)} style={styles} className="menusM">
                 <Icon className="far fa-eye" />
                </li>
        </div>
        </>
    );
}

export default MenNav;