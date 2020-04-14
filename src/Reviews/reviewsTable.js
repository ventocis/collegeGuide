import React from 'react';
import Review from './review.js';

const rowStyle = {
  textAlign: 'left',
  padding: '8px'
};

function ReviewsTable({
  curOffFilt,
  setMode,
  reviews,
  setCurReview,
  deleteReview,
  getAptCxObj
}) {
  const filteredReviews = reviews.filter(curReview => {
    if (
      (curReview.numBaths >= curOffFilt.numBaths || curOffFilt.numBaths === '') &&
      (curReview.numBeds === curOffFilt.numBeds || curOffFilt.numBeds === '')
    )
      return true;
    return false;
  });

  const sortedReviews = filteredReviews.sort(function(a, b) {
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

  if (sortedReviews.length > 0) {
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
            {sortedReviews.map((review, index) => (
              <Review
                setMode={setMode}
                review={review}
                key={index}
                setCurReview={setCurReview}
                deleteReview={deleteReview}
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

export default ReviewsTable;
