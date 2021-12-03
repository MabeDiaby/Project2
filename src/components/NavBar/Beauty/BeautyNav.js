import React, {useState} from 'react';
import './Beauty.css'
import {Link} from 'react-router-dom'
import Icon from '../../../footerComponents/icons'
import styled from 'styled-components';

function BeautyNav(props) {
    const [showBeauty, setShowBeauty] = useState(false);

    const [color, setColor] = React.useState("");

     const styles = {
        textDecoration: 'none', 
        color: 'white',
        cursor: 'pointer'
      }

      const hover = {
                color: 'green'
      }

    return (
        <>
        <div className="beautyNav">
            <li className="list" id={showBeauty ? "hiddens" : ""}>
            <Link style={{ textDecoration: 'none'}} to="/Beauty/Blush">
                <li className="beautyNavStuff">Blush</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/Beauty/Bronzer">
                <li className="beautyNavStuff">Bronzer</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/Beauty/Eyebrow">
                <li className="beautyNavStuff">Eyebrow</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/Beauty/Eyeliner">
                <li className="beautyNavStuff">Eyeliner</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/Beauty/Eyeshadow">
                <li className="beautyNavStuff">Eyeshadow</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/Beauty/Foundation">
                <li className="beautyNavStuff">Foundation</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/Beauty/LipLiner">
                <li className="beautyNavStuff">Lip Liner</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/Beauty/Lipstick">
                <li className="beautyNavStuff">Lipstick</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/Beauty/Mascara">
                <li className="beautyNavStuff">Mascara</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/Beauty/NailPolish">
                <li className="beautyNavStuff">Nail Polish</li>
            </Link>
            </li>
            <li id= "menusItem" onClick={() => setShowBeauty(!showBeauty)} style={styles} className="menus">
                 <Icon className="far fa-eye" />
                </li>
        </div>
        </>
    );
}

export default BeautyNav;