import React, { useEffect } from 'react';
import ShowAptCx from './editAptCx.js';
import AptCxTable from './aptCxTable.js';
import { db } from '../firebase.js';

function AptOrg({aptCxs, setAptCxs}) {
  ///Apt Cx Logic
  let emptyAptCx = {
    name: '',
    streetAddr: '',
    city: '',
    email: ''
  };

  const deleteAptCx = aptCx => {
    db.collection('aptCmplxs').doc(aptCx.id).delete();
  };

  //options are edit, empty
  let [mode, setMode] = React.useState("empty");
  let [curAptCx, setCurAptCx] = React.useState(emptyAptCx);

  let formSubmitted = (aptCx) => {
    let matchingAptCxs = aptCxs.filter(curAptCx => {
      return (
        curAptCx.email === aptCx.email
      )
    });

    if (aptCx.name !== "" && aptCx.streetAddr !== "" && aptCx.email !== "") {
      if (mode === "empty") {
        if (matchingAptCxs.length === 0) {
          db.collection('aptCmplxs').add(aptCx);
          setCurAptCx(emptyAptCx);
        } else {
          alert("New aptCxs need to have a unique email");
        }
      } else {
        db.collection('aptCmplxs').doc(aptCx.id).set(aptCx);
        setMode("empty");
        setCurAptCx(emptyAptCx);
      } 
    } else {
      alert("AptCxs needs to be fully filled out & have a unique email");
    }
  }

  let cancelClick = () => {
    setMode("empty");
    setCurAptCx(emptyAptCx);
  }

  let changeMode = (mode) => {
    setMode(mode)
  }

  let updateCurAptCx = (key, value) => {
    let newAptCx = { ...curAptCx };
    newAptCx[key] = value;
    setCurAptCx(newAptCx);
  }

  return (
    <div>
      <ShowAptCx mode={mode} curAptCx={curAptCx} updateCurAptCx={updateCurAptCx} submitCallback={formSubmitted} cancelClick={cancelClick}/>
      <AptCxTable aptCxs={aptCxs} setMode={changeMode} setCurAptCx={setCurAptCx} deleteAptCx={deleteAptCx} />  
    </div>
  );
}

export default AptOrg;