import React from 'react';
import { Link } from 'react-router-dom';

function AptCxView({ aptCxs, id, getOffersForCx }) {
  let curAptCx = aptCxs.filter(aptCx => aptCx.id === id);
  let myAptCx = curAptCx[0];
  let aptCxName = '';
  let queryStr = '';

  let myOffers = [];

  if (myAptCx) {
    myOffers = getOffersForCx(myAptCx.id);
  } else {
    return <h1></h1>;
  }

  console.log(myOffers);

  if (myAptCx && myOffers) {
    return (
      <div>
        <h1>{myAptCx.name}</h1>
        <p>Email: {myAptCx.name}</p>
        <p>Address: {myAptCx.streetAddr}</p>
        <p>etc.</p>

        <h5>Packages</h5>
        {myOffers.map(offer => {
          const curOfferId = '?id=' + offer.id;
          return (
            <div>
              <Link to={{ pathname: '/packages', search: curOfferId }}>
                {offer.numBeds} beds {offer.numBaths} baths
              </Link>
              <br></br>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <h1></h1>;
  }
}

export default AptCxView;
