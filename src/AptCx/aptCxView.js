import React from 'react';
import { Link } from 'react-router-dom';
import ReviewsView from 'src/Reviews/reviewsView';

function AptCxView({ aptCxs, id, getOffersForCx, getReviewsForCx, getAptCxObj }) {
  let curAptCx = aptCxs.filter(aptCx => aptCx.id === id);
  let myAptCx = curAptCx[0];

  let myOffers = [];
  let myReviews = [];

  if (myAptCx) {
    myOffers = getOffersForCx(myAptCx.id);
    myReviews = getReviewsForCx(myAptCx.id);
  } else {
    return <h1></h1>;
  }

  let sum = 0;
  myReviews.map(review => {
    sum += parseInt(review.stars);
  });

  let avgReview = sum / myReviews.length;

  if (!avgReview) {
    avgReview = 'No reviews currently';
  } else {
    avgReview = avgReview + '/5 stars from ' + myReviews.length + ' reviews';
  }

  if (myAptCx && myOffers) {
    return (
      <div>
        <h1>{myAptCx.name}</h1>
        <img src={myAptCx.picUrl} alt='apartment' className='img-fluid'></img>
        <p className='pt-3'>Email: {myAptCx.email}</p>
        <p>
          Address: {myAptCx.streetAddr} {myAptCx.city}
        </p>
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
        <ReviewsView
          getReviewsForCx={getReviewsForCx}
          getAptCxObj={getAptCxObj}
          aptCxId={myAptCx.id}
        />
      </div>
    );
  }
}

export default AptCxView;
