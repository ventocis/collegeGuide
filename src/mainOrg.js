import React, { useEffect } from 'react';
import AptCxOrg from './AptCx/aptCxOrg';
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

    const unsub2 = db.collection('offers').onSnapshot(snapshot => {
      const allOffers = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setOffers(allOffers);
    });

    return () => {
      unsub();
      unsub2();
    };
  }, []);

  let getAptCxObj = curId => {
    let curApt = aptCxs.filter(aptCx => aptCx.id === curId)[0];
    if (curApt === undefined) {
      curApt = {
        name: '',
        address: '',
        city: '',
        email: ''
      };
    }
    return curApt;
  };

  const getOffersForCx = cxId => {
    // while (offers.length == 0);
    let relatedOffers = offers.filter(offer => offer.aptCxId === cxId);
    console.log(relatedOffers);
    if (relatedOffers) {
      return relatedOffers;
    } else {
      return undefined;
    }
  };

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div className='container'>
          <Switch>
            <Route exact path='/hello'>
              <HomeOrg />
            </Route>
            <Route path='/packages'>
              <OffersOrg
                aptCxs={aptCxs}
                offers={offers}
                setOffers={setOffers}
                getAptCxObj={getAptCxObj}
              />
            </Route>
            <Route path='/aptComplexes'>
              <AptCxOrg
                aptCxs={aptCxs}
                setAptCxs={setAptCxs}
                getOffersForCx={getOffersForCx}
              />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default MainOrg;
