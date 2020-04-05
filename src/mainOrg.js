import React, { useEffect } from 'react';
import AptOrg from './AptCx/aptOrg';
import HomeOrg from './Home/homeOrg';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import OffersOrg from './Offers/offersOrg.js';
import { db } from './firebase';
import NavBar from './navbar';

function MainOrg() {
  let [aptCxs, setAptCxs] = React.useState([]);
  let [offers, setOffers] = React.useState([]);

  useEffect(() => {
    const unsub = db.collection('aptCmplxs').onSnapshot(snapshot => {
      const allAptCxs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setAptCxs(allAptCxs);
    });
    return () => {
      unsub();
    };
  }, []);

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div className='container'>
          <Switch>
            <Route exact path='/'>
              <HomeOrg />
            </Route>
            <Route path='/packages'>
              <OffersOrg aptCxs={aptCxs} offers={offers} setOffers={setOffers} />
            </Route>
            <Route path='/aptComplexes'>
              <AptOrg aptCxs={aptCxs} setAptCxs={setAptCxs} />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default MainOrg;
