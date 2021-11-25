import logo from './logo.svg';
import ClothingShow from './components/ClothingShow';
import NavBar from './components/NavBar/NavBar';
import {useState} from 'react';
import {Route, Link} from "react-router-dom"
import './App.css';
import HomePage from './components/NavBar/HomePage';
import Women from './components/NavBar/Women';
import CurvePlus from './components/NavBar/CurvePlus';
import Men from './components/NavBar/Men';
import Accessories from './components/NavBar/Accessories';
import Beauty from './components/NavBar/Beauty';

// const data = require('./data.json')

function App() {
  return (
    <>
    <div className="app-NavBar">
      <NavBar />
      </div>
      {/* <div>
      <ClothingShow />
    </div> */}

    <div className="app-Main">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/Women" component={Women} />
      <Route exact path="/CurvePlus" component={CurvePlus} />
      <Route exact path="/Men" component={Men} />
      <Route exact path="/Accessories" component={Accessories} />
      <Route exact path="/Beauty" component={Beauty} />
    </div>
    </>
  );
}

export default App;
