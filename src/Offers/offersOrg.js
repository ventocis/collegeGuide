import React, { useEffect } from 'react';
import EditOffer from './editOffer';
import OfferTable from './offersTable';
import OfferSorter from './offerSorter';
import { db } from '../firebase';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

function OffersOrg({ aptCxs, offers, setOffers }) {
  const emptyOffer = {
    aptCx: '',
    numBeds: '',
    numBaths: '',
    isFrn: '',
    sqFt: '',
    rate: ''
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

  useEffect(() => {
    const unsub = db.collection('offers').onSnapshot(snapshot => {
      const allOffers = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setOffers(allOffers);
    });
    return () => {
      unsub();
    };
  }, []);

  const deleteOffer = offer => {
    db.collection('offers')
      .doc(offer.id)
      .delete();
  };

  let formSubmitted = offer => {
    if (offer.name !== '' && offer.streetAddr !== '' && offer.email !== '') {
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
      alert('Offers needs to be fully filled out & have a unique email');
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
    newOffer[key] = value;
    setCurOffer(newOffer);
  };

  let updateCurOffFilt = (key, value) => {
    let newOfferFilt = { ...curOffFilt };
    newOfferFilt[key] = value;
    setCurOffFilt(newOfferFilt);
  };

  return (
    <Switch>
      <Route path='/packages/create'>
        <EditOffer
          aptCxs={aptCxs}
          mode={mode}
          curOffer={curOffer}
          updateCurOffer={updateCurOffer}
          submitCallback={formSubmitted}
          cancelClick={cancelClick}
        />
      </Route>
      <Route path='/packages/view'>
        <OfferSorter curOffFilt={curOffFilt} updateCurOffFilt={updateCurOffFilt} />
        <OfferTable
          offers={offers}
          setMode={changeMode}
          setCurOffer={setCurOffer}
          deleteOffer={deleteOffer}
          curOffFilt={curOffFilt}
        />
      </Route>
    </Switch>
  );
}

export default OffersOrg;
