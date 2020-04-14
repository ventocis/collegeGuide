import React from 'react';
import { Link } from 'react-router-dom';
import ReviewView from '../Reviews/reviewView';

function AptCxView({ aptCxs, id, getOffersForCx, getReviewsForCx, getAptCxObj }) {
  let curAptCx = aptCxs.filter(aptCx => aptCx.id === id);
  let myAptCx = curAptCx[0];
  let aptCxName = '';
  let queryStr = '';

  let myOffers = [];
  let myReviews = [];

  if (myAptCx) {
    myOffers = getOffersForCx(myAptCx.id);
    myReviews = getReviewsForCx(myAptCx.id);
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
        <h4>Packages</h4>
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
        <br></br>
        <h4>Reviews</h4>
        <Link to={{ pathname: '/reviews/create' }}>Write a Review</Link>
        {myReviews.map((review, index) => {
          return (
            <div>
              <ReviewView
                reviews={myReviews}
                id={review.id}
                getAptCxObj={getAptCxObj}
                key={index}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default AptCxView;
