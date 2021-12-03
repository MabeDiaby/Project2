import React from 'react';
import {Route, Link, Redirect, Switch} from "react-router-dom";

import AAcc from './components/AAcc';
import ABelts from './components/ABelts';
import AGlasses from './components/AGlasses';
import AHairAcc from './components/AHairAcc';
import AHandBags from './components/AHandBags';
import AHats from './components/AHats';
import AJewlery from './components/AJewlery'
import ALegWear from './components/ALegWear';
import ANewArrivals from './components/ANewArrivals'
import ASale from './components/ASale';
import AScarfGloves from './components/AScarfGloves';
import AccessoriesHome from './AccessoriesHome'
import AccessoriesNav from './AccessoriesNav'

function Accessories(props) {
    return (
                    <>
        <div>
    <div className="Accessories-NavBar">
      <AccessoriesNav />
      </div>
    <div className="Accessories-Main">
      <Switch>
      <Route exact path="/Accessories/ScarfGloves" component={AScarfGloves} />
      <Route exact path="/Accessories/HandBags" component={AHandBags} />
      <Route exact path="/Accessories/Jewlery" component={AJewlery} />
      <Route exact path="/Accessories/Socks" component={ALegWear} />
      <Route exact path="/Accessories/Sale" component={ASale} />
      <Route exact path="/Accessories/Hats" component={AHats} />
      <Route exact path="/Accessories/Accessory" component={AAcc} />
      <Route exact path="/Accessories/HairAccessory" component={AHairAcc} />
      <Route exact path="/Accessories/Glasses" component={AGlasses} />
      <Route exact path="/Accessories/Belts" component={ABelts} />
      <Route exact path="/Accessories/NewArrivals" component={ANewArrivals} />
      <Route exact path="/Accessories" component={AccessoriesHome} />
      <Redirect to="/Accessories" />
      </Switch>
      </div>
        </div>
        <div>
      </div>
    </>
    );
}

export default Accessories;