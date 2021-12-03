import React from "react";
import { useState } from "react";
import { BrowserRouter, Route, Link, Redirect, Switch } from "react-router-dom";
import { FooterContainer } from "./footerContainers/footer";

import logo from "./logo.svg";
import Men from "./components/NavBar/Men/Men";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/NavBar/Cart/Cart";
import Women from "./components/NavBar/Women/Women";
import Beauty from "./components/NavBar/Beauty/Beauty";
import BeautyHome from "./components/NavBar/Beauty/BeautyHome";
import HomePage from "./components/NavBar/HomePage/HomePage";
import CurvePlus from "./components/NavBar/CurvePlus/CurvePlus";
import Accessories from "./components/NavBar/Accessories/Accessories";
import CartContext from "./CartContext";

// const data = require('./data.json')

function App() {
  /*
  [] create CartContext object
  [] import the context object in app.js
  [] create a context provider
      - is going to be a component

  */ 
  const [mycart, setMycart] = useState({items:[]});

  return (
    <CartContext.Provider value={{mycart, setMycart}}>
      <div className="pageContainer">
        <div className="contentWrap">
          <div className="app-NavBar">
            <NavBar />
          </div>
          <div className="app-Main">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/Women" component={Women} />
              <Route path="/CurvePlus" component={CurvePlus} />
              <Route path="/Men" component={Men} />
              <Route path="/Accessories" component={Accessories} />
              <Route path="/Beauty" component={Beauty} />
              <Route exact path="/Cart" component={Cart} />
              <Redirect to="/" />
            </Switch>
          </div>
          <FooterContainer />
        </div>
      </div>
    </CartContext.Provider>
  );
}

export default App;
