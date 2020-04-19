import React from 'react';
import EditReview from './editReview';
import { db } from '../firebase';
import { Switch, Route, useLocation } from 'react-router-dom';
import ReviewView from './review';

function ReviewsOrg({ aptCxs, reviews, setReviews, getAptCxObj }) {
  const emptyReview = {
    aptCxName: '',
    stars: '',
    reviewTxt: '',
    numBeds: '',
    numBaths: '',
    rent: '',
    utils: '',
    isFrn: ''
  };

  const emptyOffFilt = {
    aptCx: '',
    numBeds: '',
    numBaths: '0',
    isFrn: '',
    sqFt: '0',
    rate: '0',
    sort: ''
  };

  let [curOffFilt, setCurOffFilt] = React.useState(emptyOffFilt);
  //options are edit, empty
  let [mode, setMode] = React.useState('empty');
  let [curReview, setCurReview] = React.useState(emptyReview);

  let formSubmitted = review => {
    let isFilledIn = true;
    Object.keys(review).forEach((key, index) => {
      if (review[key].length === 0 && key !== 'aptCxName') {
        isFilledIn = false;
      }
    });
    if (isFilledIn) {
      review.aptCxName = getAptCxObj(review.aptCxId).name;
      console.log(review);
      if (mode === 'empty') {
        db.collection('reviews').add(review);
        setCurReview(emptyReview);
      } else {
        db.collection('reviews')
          .doc(review.id)
          .set(review);
        setMode('empty');
        setCurReview(emptyReview);
      }
    } else {
      alert('Review needs to be fully filled out');
    }
  };

  let cancelClick = () => {
    setMode('empty');
    setCurReview(emptyReview);
  };

  let updateCurReview = (key, value) => {
    let newReview = { ...curReview };
    if (key === 'aptCx') {
      newReview[key] = getAptCxObj(value).id;
    } else {
      newReview[key] = value;
    }
    console.log(newReview);
    setCurReview(newReview);
  };

  const query = new URLSearchParams(useLocation().search);

  return (
    <Switch>
      <Route exact path='/reviews/create'>
        <EditReview
          aptCxs={aptCxs}
          mode={mode}
          curReview={curReview}
          updateCurReview={updateCurReview}
          submitCallback={formSubmitted}
          cancelClick={cancelClick}
        />
      </Route>
      <Route path='/reviews'>
        <ReviewView reviews={reviews} id={query.get('id')} getAptCxObj={getAptCxObj} />
      </Route>
    </Switch>
  );
}

export default ReviewsOrg;
