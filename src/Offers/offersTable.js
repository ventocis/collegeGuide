import React from 'react';
import Offer from './offer.js';

const rowStyle = {
  textAlign: 'left',
  padding: '8px'
};

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
      <div>
        <table>
          <thead>
            <tr>
              <th style={rowStyle}>Apt Complex Name</th>
              <th style={rowStyle}>Bedrooms</th>
              <th style={rowStyle}>Bathrooms</th>
              <th style={rowStyle}>Sq Ft</th>
              <th style={rowStyle}>Monthly Rate</th>
              <th style={rowStyle}>Furnished</th>
            </tr>
          </thead>
          <tbody>
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
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <table>
        <thead>
          <tr>
            <th style={rowStyle}>Apt Complex Name</th>
            <th style={rowStyle}>Bedrooms</th>
            <th style={rowStyle}>Bathrooms</th>
            <th style={rowStyle}>Sq Ft</th>
            <th style={rowStyle}>Monthly Rate</th>
            <th style={rowStyle}>Furnished</th>
          </tr>
        </thead>
      </table>
    );
  }
}

export default OffersTable;
