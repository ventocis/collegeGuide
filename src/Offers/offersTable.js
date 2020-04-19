import React from 'react';
import Offer from './offer.js';

function OffersTable({
  curOffFilt,
  setMode,
  offers,
  setCurOffer,
  deleteOffer,
  getAptCxObj
}) {
  const filteredOffers = offers.filter(curOffer => {
    if (
      (curOffer.numBaths >= curOffFilt.numBaths || curOffFilt.numBaths === '') &&
      (curOffer.numBeds === curOffFilt.numBeds || curOffFilt.numBeds === '')
    )
      return true;
    return false;
  });

  const sortedOffers = filteredOffers.sort(function(a, b) {
    if (curOffFilt.sort === '') {
      return 0;
    } else if (curOffFilt.sort.includes('rate')) {
      if (curOffFilt.sort.includes('-')) {
        return b.rate - a.rate;
      } else {
        return a.rate - b.rate;
      }
    }
  });

  if (sortedOffers.length > 0) {
    return (
      <div className='container-fluid'>
        <div className='row justify-content-between'>
          {sortedOffers.map((offer, index) => (
            <Offer
              setMode={setMode}
              offer={offer}
              key={index}
              setCurOffer={setCurOffer}
              deleteOffer={deleteOffer}
              getAptCxObj={getAptCxObj}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return <h4>No offers match the current filters</h4>;
  }
}

export default OffersTable;
