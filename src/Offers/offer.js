import React from 'react';
import { Link } from 'react-router-dom';

const zoomStyle = {
  objectFit: 'cover'
};

function Offer({ offer, setMode, setCurOffer, deleteOffer, getAptCxObj }) {
  let curOfferId = 'id=' + offer.id;
  const curAptCxId = 'id=' + offer.aptCxId;
  let curLink = '/packages?id=' + curOfferId;
  const aptCx = getAptCxObj(offer.aptCxId);

  if (aptCx) {
    return (
      <div className='card col-md-3 m-3 p-0'>
        <div className='embed-responsive embed-responsive-4by3'>
          <Link
            className='btn btn-secondary'
            to={{ pathname: '/packages', search: curOfferId }}
          >
            <img
              style={zoomStyle}
              src={aptCx.picUrl}
              className='card-img-top embed-responsive-item'
            ></img>
          </Link>
        </div>
        <div className='card-body'>
          <Link
            className='card-subtitle pb-5'
            to={{ pathname: '/aptcomplexes', search: curAptCxId }}
          >
            {aptCx.name}{' '}
          </Link>
          <p className='card-text'>
            {offer.numBeds} Bed {offer.numBaths} Bath <br></br>${offer.rate}/mo<br></br>
            {offer.sqFt} sq. ft.
          </p>

          <Link
            className='btn btn-secondary'
            to={{ pathname: '/packages', search: curOfferId }}
          >
            View Offer
          </Link>
        </div>
      </div>
    );
  } else {
    return <tr></tr>;
  }
}

export default Offer;

//client id & then client secret
//966300622797-n018hjge6e4ltjjs049lopah1k1mov3o.apps.googleusercontent.com

//7rpIh9oA9ks5JDdQWsv-sd93
