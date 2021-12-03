import React from 'react';
import {Route, Link, Redirect, Switch} from "react-router-dom";

import CurvePlusNav from './CurvePlusNav'
import PSBottom from './components/PSBottom'
import PSDress from './components/PSDress'
import PSIntimates from './components/PSIntimates'
import PSNewArrivals from './components/PSNewArrivals'
import PSOuterWear from './components/PSOuterWear'
import PSSale from './components/PSSale'
import PSTops from './components/PSTops'
import CurvePlusHome from './CurvePlusHome'


function CurvePlus(props) {
    return (
        <>
        <div>
    <div className="PS-NavBar">
      <CurvePlusNav />
      <CurvePlusHome />
      </div>
    <div className="PS-Main">
      <Switch>
      <Route exact path="/CurvePlus/Pants" component={PSBottom} />
      <Route exact path="/CurvePlus/Dress" component={PSDress} />
      <Route exact path="/CurvePlus/Lingerie" component={PSIntimates} />
      <Route exact path="/CurvePlus/NewArrivals" component={PSNewArrivals} />
      <Route exact path="/CurvePlus/OuterWear" component={PSOuterWear} />
      <Route exact path="/CurvePlus/Sale" component={PSSale} />
      <Route exact path="/CurvePlus/Tops" component={PSTops} />
      <Redirect to="/CurvePlus" />
      </Switch>
      </div>
        </div>
    </>
    );
}

export default CurvePlus;