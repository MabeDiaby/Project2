import React, {useState} from 'react';
import Icon from '../../../footerComponents/icons'
import './Women.css'
import {Link} from 'react-router-dom'

function WomenNav(props) {
    const [showWomen, setShowWomen] = useState(false);

    const [color, setColor] = React.useState("");

     const styles = {
        textDecoration: 'none', 
        color: 'white',
        cursor: 'pointer'
      }

    return (
         <>
        <div className="womenNav">
            <li className="aList" id={showWomen ? "hiddensW" : ""}>
            <Link style={{ textDecoration: 'none'}} to="/Women/NewArrivals">
                <li className="womenNavStuff">New Arrivals</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/Women/Tops">
                <li className="womenNavStuff">Tops</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/Women/Dress">
                <li className="womenNavStuff">Dress</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/Women/Shoes">
                <li className="womenNavStuff">Shoes</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/Women/ActiveWear">
                <li className="womenNavStuff">Active Wear</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/Women/Pants">
                <li className="womenNavStuff">Pants</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/Women/NameBrand">
                <li className="womenNavStuff">Name Brand</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/Women/Jeans">
                <li className="womenNavStuff">Jeans</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/Women/Lingerie">
                <li className="womenNavStuff">Lingerie</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/Women/Coats_Jackets">
                <li className="womenNavStuff">Coats & Jackets</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/Women/LoungeWear">
                <li className="womenNavStuff">LoungeWear</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/Women/Sale">
                <li className="womenNavStuff">Sale</li>
            </Link>
            </li>
            <li id= "menusItemW" onClick={() => setShowWomen(!showWomen)} style={styles} className="menusW">
                 <Icon className="far fa-eye" />
                </li>
        </div>
        </>
    );
}

export default WomenNav;