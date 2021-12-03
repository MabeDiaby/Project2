import React from 'react';
import {Route, Link, Redirect, Switch} from "react-router-dom";
import Blush from './compnents/Blush';
import Bronzer from './compnents/Bronzer';
import Eyebrow from './compnents/Eyebrow';
import Eyeliner from './compnents/Eyeliner';
import Eyeshadow from './compnents/Eyeshadow';
import Foundation from './compnents/Foundation';
import LipLiner from './compnents/LipLiner';
import Lipstick from './compnents/Lipstick';
import Mascara from './compnents/Mascara';
import NailPolish from './compnents/NailPolish';
import BeautyNav from './BeautyNav';
import BeautyHome from './BeautyHome';
import { FooterContainer } from "../../../footerContainers/footer";


function Beauty(props) {

    return (
        <>
    <div className="Beauty-NavBar">
      <BeautyNav />
      </div>
    <div className="Beauty-Main">
      <Switch>
      <Route exact path="/Beauty/Blush" component={Blush} />
      <Route exact path="/Beauty/Bronzer" component={Bronzer} />
      <Route exact path="/Beauty/Eyebrow" component={Eyebrow} />
      <Route exact path="/Beauty/Eyeliner" component={Eyeliner} />
      <Route exact path="/Beauty/Eyeshadow" component={Eyeshadow} />
      <Route exact path="/Beauty/Foundation" component={Foundation} />
      <Route exact path="/Beauty/LipLiner" component={LipLiner} />
      <Route exact path="/Beauty/Lipstick" component={Lipstick} />
      <Route exact path="/Beauty/Mascara" component={Mascara} />
      <Route exact path="/Beauty/NailPolish" component={NailPolish} />
      <Route exact path="/Beauty" component={BeautyHome} />
      <Redirect to="/Beauty" />
      </Switch>
      </div>
      <div>
      </div>
    </>

    );
}

export default Beauty;