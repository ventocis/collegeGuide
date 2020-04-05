import React from 'react';

const rowStyle = {
  textAlign: 'left',
  padding: '8px'
};

function Offer({ offer, setMode, setCurOffer, deleteOffer }) {
  let editOffer = event => {
    setMode('edit');
    setCurOffer(offer);
  };

  let deleteClick = () => {
    deleteOffer(offer);
  };

  return (
    <tr>
      <td style={rowStyle}> {offer.aptCx} </td>
      <td style={rowStyle}> {offer.numBeds} </td>
      <td style={rowStyle}> {offer.numBaths}</td>
      <td style={rowStyle}>{offer.sqFt}</td>
      <td style={rowStyle}> {offer.rate} </td>
      <td style={rowStyle}> {offer.isFrn} </td>
      <td>
        <button onClick={event => editOffer(event)}>Edit AptCx</button>
        <button onClick={event => deleteClick(event)}>Delete</button>
      </td>
    </tr>
  );
}

export default Offer;

//client id & then client secret
//966300622797-n018hjge6e4ltjjs049lopah1k1mov3o.apps.googleusercontent.com

//7rpIh9oA9ks5JDdQWsv-sd93
