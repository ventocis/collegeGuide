import React, { useEffect } from 'react';
import ShowAptCx from './editAptCx.js';
import AptCxTable from './aptCxTable.js';
import AptCxView from './aptCxView';
import { db } from '../firebase.js';
import { Switch, Route, useLocation } from 'react-router-dom';

function AptCxOrg({
  aptCxs,
  setAptCxs,
  getOffersForCx,
  offers,
  getReviewsForCx,
  getAptCxObj
}) {
  ///Apt Cx Logic
  let emptyAptCx = {
    name: '',
    streetAddr: '',
    city: '',
    email: ''
  };

  const deleteAptCx = aptCx => {
    db.collection('aptCmplxs')
      .doc(aptCx.id)
      .delete();
  };

  //options are edit, empty
  let [mode, setMode] = React.useState('empty');
  let [curAptCx, setCurAptCx] = React.useState(emptyAptCx);

  let formSubmitted = aptCx => {
    let matchingAptCxs = aptCxs.filter(curAptCx => {
      return curAptCx.email === aptCx.email;
    });

    let isFilledIn = true;
    Object.keys(aptCx).forEach((key, index) => {
      if (aptCx[key].length == 0) {
        isFilledIn = false;
      }
    });
    if (isFilledIn) {
      if (mode === 'empty') {
        if (matchingAptCxs.length === 0) {
          db.collection('aptCmplxs').add(aptCx);
          setCurAptCx(emptyAptCx);
        } else {
          alert('New aptCxs need to have a unique email');
        }
      } else {
        db.collection('aptCmplxs')
          .doc(aptCx.id)
          .set(aptCx);
        setMode('empty');
        setCurAptCx(emptyAptCx);
      }
    } else {
      alert('AptCxs needs to be fully filled out');
    }
  };

  let cancelClick = () => {
    setMode('empty');
    setCurAptCx(emptyAptCx);
  };

  let changeMode = mode => {
    setMode(mode);
  };

  let updateCurAptCx = (key, value) => {
    let newAptCx = { ...curAptCx };
    newAptCx[key] = value;
    setCurAptCx(newAptCx);
  };

  const query = new URLSearchParams(useLocation().search);

  return (
    <Switch>
      <Route exact path='/aptcomplexes/view'>
        <ShowAptCx
          mode={mode}
          curAptCx={curAptCx}
          updateCurAptCx={updateCurAptCx}
          submitCallback={formSubmitted}
          cancelClick={cancelClick}
        />
        <AptCxTable
          aptCxs={aptCxs}
          setMode={changeMode}
          setCurAptCx={setCurAptCx}
          deleteAptCx={deleteAptCx}
        />
      </Route>
      <Route path='/aptcomplexes'>
        <AptCxView
          aptCxs={aptCxs}
          id={query.get('id')}
          getOffersForCx={getOffersForCx}
          getReviewsForCx={getReviewsForCx}
          getAptCxObj={getAptCxObj}
        />
      </Route>
    </Switch>
  );
}

export default AptCxOrg;
