import React from 'react';
import { Link } from 'react-router-dom';

const rowStyle = {
  textAlign: 'left',
  padding: '8px'
};

function Offer({ offer, setMode, setCurOffer, deleteOffer, getAptCxObj }) {
  let editOffer = event => {
    setMode('edit');
    setCurOffer(offer);
  };

  let deleteClick = () => {
    deleteOffer(offer);
  };

  let curOfferId = 'id=' + offer.id;
  const curAptCxId = 'id=' + offer.aptCxId;
  const aptCxName = getAptCxObj(offer.aptCxId).name;

  if (aptCxName) {
    return (
      <tr>
        <td style={rowStyle}>
          <Link to={{ pathname: '/aptcomplexes', search: curAptCxId }}>{aptCxName} </Link>
        </td>
        <td style={rowStyle}> {offer.numBeds} </td>
        <td style={rowStyle}> {offer.numBaths}</td>
        <td style={rowStyle}>{offer.sqFt}</td>
        <td style={rowStyle}> {offer.rate} </td>
        <td style={rowStyle}> {offer.isFrn} </td>
        <td style={rowStyle}>
          <Link to={{ pathname: '/packages', search: curOfferId }}>
            View This Package{' '}
          </Link>
        </td>
        <td>
          <button onClick={event => editOffer(event)}>Edit AptCx</button>
          <button onClick={event => deleteClick(event)}>Delete</button>
        </td>
      </tr>
    );
  } else {
    return <tr></tr>;
  }
}

export default Offer;

//client id & then client secret
//966300622797-n018hjge6e4ltjjs049lopah1k1mov3o.apps.googleusercontent.com

//7rpIh9oA9ks5JDdQWsv-sd93
