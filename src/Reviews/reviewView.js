import React from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase';

function ReviewView({ reviews, id, getAptCxObj }) {
  let curReview = reviews.filter(review => review.id === id);
  let myReview = curReview[0];
  let aptCxName = '';
  let queryStr = '';

  console.log(myReview);

  if (myReview) {
    aptCxName = getAptCxObj(myReview.aptCxId).name;
    queryStr = '?id=' + myReview.aptCxId;
  }

  if (myReview) {
    return (
      <div>
        <h5>{myReview.stars}/5 stars</h5>
        <p>
          Their place: {myReview.numBeds} bed(s) {myReview.numBaths} bath(s) <br></br>
          Furnished: {myReview.isFrn} <br></br>
          Rent: ${myReview.rent}/month <br></br>Avg Utilities: ${myReview.utils}/month
        </p>
        <p>
          {' '}
          What they had to say:<br></br>
          {myReview.reviewTxt}
        </p>
      </div>
    );
  } else {
    return <h1></h1>;
  }
}

export default ReviewView;
