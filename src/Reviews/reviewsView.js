import React from 'react';
import { Link } from 'react-router-dom';
import Review from '../Reviews/review';

function ReviewsView({ getReviewsForCx, getAptCxObj, aptCxId }) {
  let myAptCx = getAptCxObj(aptCxId);
  let queryStr = '';

  let myReviews = [];

  if (myAptCx) {
    myReviews = getReviewsForCx(myAptCx.id);
  } else {
    return <h1></h1>;
  }

  let avgUtils = '';
  let avgRent = '';

  let sum = 0;
  let sumUtils = 0;
  let sumRent = 0;
  myReviews.map(review => {
    sum += parseInt(review.stars);
    sumUtils += parseInt(review.utils);
    sumRent += parseInt(review.rent);
  });

  let avgReview = sum / myReviews.length;

  if (!avgReview) {
    avgReview = 'No reviews currently';
  } else {
    avgReview = avgReview + '/5 stars from ' + myReviews.length + ' reviews';
    avgUtils = 'Avg Utilities: $' + sumUtils / myReviews.length;
    avgRent = 'Avg Rent: $' + sumRent / myReviews.length;
  }

  if (myAptCx) {
    return (
      <div>
        <h4>Reviews for {myAptCx.name}</h4>
        <Link to={{ pathname: '/reviews/create' }}>Write a Review</Link>
        <br></br>
        <br></br>
        <div className='row justify-content-between'>
          <h6 className='col-md-4 text-md-left'>{avgReview}</h6>
          <h6 className='col-md-4 text-md-center'>{avgRent}</h6>
          <h6 className='col-md-4 text-md-right'>{avgUtils}</h6>
        </div>
        {myReviews.map((review, index) => {
          return (
            <div>
              <Review
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

export default ReviewsView;

//client id & then client secret
//966300622797-n018hjge6e4ltjjs049lopah1k1mov3o.apps.googleusercontent.com

//7rpIh9oA9ks5JDdQWsv-sd93
