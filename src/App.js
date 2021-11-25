import {useState} from 'react';
import logo from './logo.svg';
import Men from './components/NavBar/Men';
import {Route, Link, Redirect, Switch} from "react-router-dom";
import Women from './components/NavBar/Women';
import NavBar from './components/NavBar/NavBar';
import Beauty from './components/NavBar/Beauty';
import HomePage from './components/NavBar/HomePage';
import ClothingShow from './components/ClothingShow';
import CurvePlus from './components/NavBar/CurvePlus';
import Accessories from './components/NavBar/Accessories';

// const data = require('./data.json')

function App() {
  return (
    <>
    <div className="app-NavBar">
      <NavBar />
      </div>
    <div className="app-Main">
      <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/Women" component={Women} />
      <Route exact path="/CurvePlus" component={CurvePlus} />
      <Route exact path="/Men" component={Men} />
      <Route exact path="/Accessories" component={Accessories} />
      <Route exact path="/Beauty" component={Beauty} />
      <Redirect to= "/" />
      </Switch>
    </div>
    </>
  );
}

export default App;
