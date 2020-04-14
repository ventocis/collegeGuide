import React from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase';

function OfferView({ offers, id, getAptCxObj }) {
  let curOffer = offers.filter(offer => offer.id === id);
  let myOffer = curOffer[0];
  let aptCxName = '';
  let queryStr = '';

  if (myOffer) {
    aptCxName = getAptCxObj(myOffer.aptCxId).name;
    queryStr = '?id=' + myOffer.aptCxId;
  }

  if (myOffer) {
    return (
      <div>
        <p>
          Check out this deal! It has {myOffer.numBeds} beds and {myOffer.numBaths} baths
        </p>
        <p>Furnished?: {myOffer.isFrn}</p>
        <Link to={{ pathname: '/aptcomplexes', search: queryStr }}>{aptCxName} </Link>
      </div>
    );
  } else {
    return <h1></h1>;
  }
}

export default OfferView;
