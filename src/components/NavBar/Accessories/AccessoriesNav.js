import React, {useState} from 'react';
import Icon from '../../../footerComponents/icons'
import styled from 'styled-components';
import './Accessories.css'
import AccessoriesHome from './AccessoriesHome';
import {Link} from 'react-router-dom'

function AccessoriesNav(props) {
    const [showAccessories, setShowAccessories] = useState(false);

    const [color, setColor] = React.useState("");

     const styles = {
        textDecoration: 'none', 
        color: 'white',
        cursor: 'pointer'
      }

    return (
             <>
        <div className="accessoriesNav">
            <li className="aList" id={showAccessories ? "hiddensA" : ""}>
            <Link style={{ textDecoration: 'none'}} to="/Accessories/NewArrivals">
                <li className="accessoriesNavStuff">New Arrivals</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/Accessories/Jewlery">
                <li className="accessoriesNavStuff">Jewlery</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/Accessories/HandBags">
                <li className="accessoriesNavStuff">Handbags</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/Accessories/Hats">
                <li className="accessoriesNavStuff">Hats</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/Accessories/Accessory">
                <li className="accessoriesNavStuff">Accessory</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/Accessories/Glasses">
                <li className="accessoriesNavStuff">Glasses</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/Accessories/Belts">
                <li className="accessoriesNavStuff">Belts</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/Accessories/Socks">
                <li className="accessoriesNavStuff">Socks</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/Accessories/ScarfGloves">
                <li className="accessoriesNavStuff">Scarfs & Gloves</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/Accessories/HairAccessory">
                <li className="accessoriesNavStuff">Hair Accessory</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/Accessories/Sale">
                <li className="accessoriesNavStuff">Sale</li>
            </Link>
            </li>
            <li id= "menusItemA" onClick={() => setShowAccessories(!showAccessories)} style={styles} className="menusA">
                 <Icon className="far fa-eye" />
                </li>
        </div>
        </>
    );
}

export default AccessoriesNav;