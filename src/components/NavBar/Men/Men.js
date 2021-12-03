import React from 'react';
import {Route, Link, Redirect, Switch} from "react-router-dom";

import MAcc from './components/MAcc'
import MBottom from './components/MBottom'
import MDenim from './components/MDenim'
import MJacketsCoats from './components/MJacketsCoats'
import MNewArrivals from './components/MNewArrivals'
import MSale from './components/MSale'
import MShoes from './components/MShoes'
import MTops from './components/MTops'
import MenHome from './MenHome';

import MenNav from './MenNav'

function Men(props) {

    return (
        <>
        <div>
    <div className="MNavBar">
      <MenNav />
        <MenHome />
      </div>
    <div className="MMain">
      <Switch>
      <Route exact path="/Men/Accessories" component={MAcc} />
      <Route exact path="/Men/Pants" component={MBottom} />
      <Route exact path="/Men/Tops" component={MTops} />
      <Route exact path="/Men/Shoes" component={MShoes} />
      <Route exact path="/Men/Sale" component={MSale} />
      <Route exact path="/Men/NewArrivals" component={MNewArrivals} />
      <Route exact path="/Men/Coats_Jackets" component={MJacketsCoats} />
      <Route exact path="/Men/Jeans" component={MDenim} />
      <Redirect to="/Men" />
      </Switch>
      </div>
        </div>
    </>
    );
  }
  
  export default Men;