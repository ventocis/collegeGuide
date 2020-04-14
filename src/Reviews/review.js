import React from 'react';
import { Link } from 'react-router-dom';

const rowStyle = {
  textAlign: 'left',
  padding: '8px'
};

function Review({ review, setMode, setCurReview, deleteReview, getAptCxObj }) {
  let editReview = event => {
    setMode('edit');
    setCurReview(review);
  };

  let deleteClick = () => {
    deleteReview(review);
  };

  let curReviewId = 'id=' + review.id;
  const curAptCxId = 'id=' + review.aptCxId;
  const aptCxName = getAptCxObj(review.aptCxId).name;

  if (aptCxName) {
    return (
      <tr>
        <td style={rowStyle}>
          <Link to={{ pathname: '/aptcomplexes', search: curAptCxId }}>{aptCxName} </Link>
        </td>
        <td style={rowStyle}> {review.numBeds} </td>
        <td style={rowStyle}> {review.numBaths}</td>
        <td style={rowStyle}>{review.sqFt}</td>
        <td style={rowStyle}> {review.rate} </td>
        <td style={rowStyle}> {review.isFrn} </td>
        <td style={rowStyle}>
          <Link to={{ pathname: '/packages', search: curReviewId }}>
            View This Package{' '}
          </Link>
        </td>
        <td>
          <button onClick={event => editReview(event)}>Edit AptCx</button>
          <button onClick={event => deleteClick(event)}>Delete</button>
        </td>
      </tr>
    );
  } else {
    return <tr></tr>;
  }
}

export default Review;

//client id & then client secret
//966300622797-n018hjge6e4ltjjs049lopah1k1mov3o.apps.googleusercontent.com

//7rpIh9oA9ks5JDdQWsv-sd93
