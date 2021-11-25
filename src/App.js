import logo from './logo.svg';
import ClothingShow from './components/ClothingShow';
import NavBar from './components/NavBar/NavBar';
import {useState} from 'react';
import './App.css';

// const data = require('./data.json')

function App() {
  return (
    <div className="App">
      <NavBar />
      <ClothingShow />
    </div>
  );
}

export default App;
