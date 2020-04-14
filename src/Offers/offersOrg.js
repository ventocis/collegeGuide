import React, { useEffect } from 'react';
import EditOffer from './editOffer';
import OfferTable from './offersTable';
import OfferSorter from './offerSorter';
import { db } from '../firebase';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from '../Home/homeOrg';
import OfferView from './offerView';

function OffersOrg({ aptCxs, offers, setOffers, getAptCxObj }) {
  const emptyOffer = {
    aptCxId: '',
    numBeds: '',
    numBaths: '',
    isFrn: '',
    sqFt: '',
    rate: '',
    aptCxName: ''
  };

  const emptyOffFilt = {
    aptCx: '',
    numBeds: '',
    numBaths: '0',
    isFrn: '',
    sqFt: '0',
    rate: '0',
    sort: ''
  };

  let [curOffFilt, setCurOffFilt] = React.useState(emptyOffFilt);
  //options are edit, empty
  let [mode, setMode] = React.useState('empty');
  let [curOffer, setCurOffer] = React.useState(emptyOffer);

  // useEffect(() => {
  //   const unsub = db.collection('offers').onSnapshot(snapshot => {
  //     const allOffers = snapshot.docs.map(doc => ({
  //       id: doc.id,
  //       ...doc.data()
  //     }));
  //     setOffers(allOffers);
  //   });
  //   return () => {
  //     unsub();
  //   };
  // }, []);

  const deleteOffer = offer => {
    db.collection('offers')
      .doc(offer.id)
      .delete();
  };

  let formSubmitted = offer => {
    console.log(offer);
    let isFilledIn = true;
    Object.keys(offer).forEach((key, index) => {
      if (offer[key].length == 0 && key !== 'aptCxName') {
        isFilledIn = false;
      }
    });

    if (isFilledIn) {
      offer.aptCxName = getAptCxObj(offer.aptCxId).name;
      console.log(offer);
      if (mode === 'empty') {
        db.collection('offers').add(offer);
        setCurOffer(emptyOffer);
      } else {
        db.collection('offers')
          .doc(offer.id)
          .set(offer);
        setMode('empty');
        setCurOffer(emptyOffer);
      }
    } else {
      alert('Package needs to be fully filled out');
    }
  };

  let cancelClick = () => {
    setMode('empty');
    setCurOffer(emptyOffer);
  };

  let changeMode = mode => {
    setMode(mode);
  };

  let updateCurOffer = (key, value) => {
    let newOffer = { ...curOffer };
    if (key === 'aptCx') {
      newOffer[key] = getAptCxObj(value).id;
    } else {
      newOffer[key] = value;
    }
    setCurOffer(newOffer);
  };

  let updateCurOffFilt = (key, value) => {
    let newOfferFilt = { ...curOffFilt };
    newOfferFilt[key] = value;
    setCurOffFilt(newOfferFilt);
  };

  const query = new URLSearchParams(useLocation().search);

  return (
    <Switch>
      <Route exact path='/packages/create'>
        <EditOffer
          aptCxs={aptCxs}
          mode={mode}
          curOffer={curOffer}
          updateCurOffer={updateCurOffer}
          submitCallback={formSubmitted}
          cancelClick={cancelClick}
        />
      </Route>
      <Route exact path='/packages/view'>
        <OfferSorter curOffFilt={curOffFilt} updateCurOffFilt={updateCurOffFilt} />
        <OfferTable
          offers={offers}
          setMode={changeMode}
          setCurOffer={setCurOffer}
          deleteOffer={deleteOffer}
          curOffFilt={curOffFilt}
          getAptCxObj={getAptCxObj}
        />
      </Route>
      <Route path='/packages'>
        <OfferView offers={offers} id={query.get('id')} getAptCxObj={getAptCxObj} />
      </Route>
    </Switch>
  );
}

export default OffersOrg;
