import React from 'react';
import {Route, Link, Redirect, Switch} from "react-router-dom";
import WomenNav from './WomenNav'
import WBranded from './components/WBranded'
import WShoes from './components/WShoes'
import WLingerie from './components/WLingerie'
import WActiveWear from './components/WActiveWear'
import WBottoms from './components/WBottoms'
import WCoatsJackets from './components/WCoatsJackets'
import WDress from './components/WDress'
import WJeans from './components/WJeans'
import WLoungeWear from './components/WLoungeWear'
import WNewArrivals from './components/WNewArrivals'
import WSale from './components/WSale'
import WtopBlouses from './components/WtopBlouses'
import WomenHome from './WomenHome'

function Women(props) {
    return (
        <>
        <div>
    <div className="Women-NavBar">
      <WomenNav />
      <WomenHome />
      </div>
    <div className="Women-Main">
      <Switch>
      <Route exact path="/Women/Shoes" component={WShoes} />
      <Route exact path="/Women/ActiveWear" component={WActiveWear} />
      <Route exact path="/Women/Lingerie" component={WLingerie} />
      <Route exact path="/Women/Pants" component={WBottoms} />
      <Route exact path="/Women/Dress" component={WDress} />
      <Route exact path="/Women/NameBrand" component={WBranded} />
      <Route exact path="/Women/Coats_Jackets" component={WCoatsJackets} />
      <Route exact path="/Women/LoungeWear" component={WLoungeWear} />
      <Route exact path="/Women/NewArrivals" component={WNewArrivals} />
      <Route exact path="/Women/Sale" component={WSale} />
      <Route exact path="/Women/Jeans" component={WJeans} />
      <Route exact path="/Women/Tops" component={WtopBlouses} />
      <Redirect to="/Women" />
      </Switch>
      </div>
        </div>
    </>
    );
}

export default Women;