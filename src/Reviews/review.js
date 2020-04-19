import React from 'react';

function Review({ reviews, id, getAptCxObj }) {
  let curReview = reviews.filter(review => review.id === id);
  let myReview = curReview[0];
  let aptCxName = '';
  let queryStr = '';

  if (myReview) {
    aptCxName = getAptCxObj(myReview.aptCxId).name;
    queryStr = '?id=' + myReview.aptCxId;
  }

  if (myReview) {
    return (
      <div className='card p-3 mt-3'>
        <div clasname='card-body'>
          <h5 className='card-title'>{myReview.stars}/5 stars</h5>
          <h6 className='card-subtitle pb-1 text-muted'>
            Rent: ${myReview.rent}/month&emsp;Avg Utilities: ${myReview.utils}/month
            <br></br>
          </h6>
          <p className='card-text'>
            {myReview.numBeds} bed {myReview.numBaths} bath Furnished: {myReview.isFrn}
            <br></br>
            What they had to say:<br></br>
            {myReview.reviewTxt}
          </p>
        </div>
      </div>
    );
  } else {
    return <h1></h1>;
  }
}

export default Review;
