import React, { useEffect } from 'react';
import EditReview from './editReview';
import ReviewTable from './reviewsTable';
import ReviewSorter from './reviewSorter';
import { db } from '../firebase';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from '../Home/homeOrg';
import ReviewView from './reviewView';

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

  // useEffect(() => {
  //   const unsub = db.collection('reviews').onSnapshot(snapshot => {
  //     const allReviews = snapshot.docs.map(doc => ({
  //       id: doc.id,
  //       ...doc.data()
  //     }));
  //     setReviews(allReviews);
  //   });
  //   return () => {
  //     unsub();
  //   };
  // }, []);

  const deleteReview = review => {
    db.collection('reviews')
      .doc(review.id)
      .delete();
  };

  let formSubmitted = review => {
    let isFilledIn = true;
    Object.keys(review).forEach((key, index) => {
      if (review[key].length == 0 && key !== 'aptCxName') {
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

  let changeMode = mode => {
    setMode(mode);
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

  let updateCurOffFilt = (key, value) => {
    let newReviewFilt = { ...curOffFilt };
    newReviewFilt[key] = value;
    setCurOffFilt(newReviewFilt);
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
      <Route exact path='/reviews/view'>
        <ReviewSorter curOffFilt={curOffFilt} updateCurOffFilt={updateCurOffFilt} />
        <ReviewTable
          reviews={reviews}
          setMode={changeMode}
          setCurReview={setCurReview}
          deleteReview={deleteReview}
          curOffFilt={curOffFilt}
          getAptCxObj={getAptCxObj}
        />
      </Route>
      <Route path='/reviews'>
        <ReviewView reviews={reviews} id={query.get('id')} getAptCxObj={getAptCxObj} />
      </Route>
    </Switch>
  );
}

export default ReviewsOrg;
