import React from 'react';
import { Link } from 'react-router-dom';
import ReviewsView from '../Reviews/reviewsView';

function OfferView({ offers, id, getAptCxObj, getReviewsForCx }) {
  let curOffer = offers.filter(offer => offer.id === id);
  let myOffer = curOffer[0];
  let aptCxName = '';
  let queryStr = '';
  let aptCx = null;
  let myReviews = null;
  let avgReview = null;
  let sum = 0;
  let furn = '';

  if (myOffer) {
    aptCx = getAptCxObj(myOffer.aptCxId);
    myReviews = getReviewsForCx(aptCx.id);
    queryStr = '?id=' + myOffer.aptCxId;
    aptCxName = aptCx.name;
    if (myOffer.isFrn === 'yes') {
      furn = 'Furnished';
    } else {
      furn = 'Not Furnished';
    }
  }

  if (myReviews) {
    myReviews.map(review => {
      sum += parseInt(review.stars);
      avgReview = sum / myReviews.length;
    });
  }

  if (!avgReview) {
    avgReview = 'No reviews currently';
  } else {
    avgReview = avgReview + '/5 stars from ' + myReviews.length + ' reviews';
  }

  if (myOffer) {
    return (
      <div>
        <h4>
          {myOffer.numBeds} Bed {myOffer.numBaths} Bath @&nbsp;
          <Link className='' to={{ pathname: '/aptcomplexes', search: queryStr }}>
            {aptCxName}{' '}
          </Link>
        </h4>

        <div className='min-vh-25'>
          <img src={aptCx.picUrl} alt='Apartment Complex' className='img-fluid '></img>
        </div>

        <div className='container-fluid pl-0 pt-2'>
          <div className='row'>
            <div className='col-md text-md-center'>Rate: ${myOffer.rate}</div>
            <div className='col-md text-md-center'>{myOffer.numBeds} Bed</div>
            <div className='col-md text-md-center'>{myOffer.numBaths} Bath</div>
            <div className='col-md text-md-center'>{furn}</div>
            <div className='col-md text-md-center'>{myOffer.sqFt} sq ft</div>
          </div>
        </div>
        <br></br>
        <ReviewsView
          aptCxId={myOffer.aptCxId}
          reviews={myReviews}
          getAptCxObj={getAptCxObj}
          getReviewsForCx={getReviewsForCx}
        />
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
}

export default OfferView;
