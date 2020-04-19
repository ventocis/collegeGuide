import React, { useEffect } from 'react';
import AptCxOrg from './AptCx/aptCxOrg';
import HomeOrg from './Home/homeOrg';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import OffersOrg from './Offers/offersOrg.js';
import { db } from './firebase';
import NavBar from './navbar';

import StudentOrg from './Student/studentOrg';
import ReviewsOrg from './Reviews/reviewsOrg';
import Footer from './footer';
import Home from './home';

const overflowStyle = {
  overflowX: 'hidden'
};

function MainOrg({ curUser, setCurUser }) {
  let [aptCxs, setAptCxs] = React.useState([]);
  let [offers, setOffers] = React.useState([]);
  let [students, setStudents] = React.useState([]);
  let [reviews, setReviews] = React.useState([]);

  let updateCurUser = (key, value) => {
    let newCurUser = { ...curUser };
    newCurUser[key] = value;
    setCurUser(newCurUser);
  };

  useEffect(() => {
    const unsub = db.collection('aptCmplxs').onSnapshot(snapshot => {
      const allAptCxs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        picUrl: '/Imgs/AptCxs/' + doc.data().name + '/' + doc.data().pics[0]
      }));
      setAptCxs(allAptCxs);
    });

    const unsub2 = db.collection('offers').onSnapshot(snapshot => {
      const allOffers = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setOffers(allOffers);
    });

    const unsub3 = db.collection('students').onSnapshot(snapshot => {
      const allStudents = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setStudents(allStudents);
    });

    const unsub4 = db.collection('reviews').onSnapshot(snapshot => {
      const allReviews = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setReviews(allReviews);
    });

    return () => {
      unsub();
      unsub2();
      unsub3();
      unsub4();
    };
  }, []);

  let getAptCxObj = curId => {
    let curApt = aptCxs.filter(aptCx => aptCx.id === curId)[0];
    if (curApt === undefined) {
      curApt = {
        name: '',
        address: '',
        city: '',
        email: '',
        pic: ''
      };
    }
    return curApt;
  };

  const getOffersForCx = cxId => {
    // while (offers.length == 0);
    let relatedOffers = offers.filter(offer => offer.aptCxId === cxId);
    if (relatedOffers) {
      return relatedOffers;
    } else {
      return undefined;
    }
  };

  const getReviewsForCx = cxId => {
    // while (offers.length == 0);
    let relatedReviews = reviews.filter(review => review.aptCxId === cxId);
    if (relatedReviews) {
      return relatedReviews;
    } else {
      return undefined;
    }
  };
  return (
    <BrowserRouter>
      <NavBar curUser={curUser} />
      <div className='container'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/packages'>
            <OffersOrg
              aptCxs={aptCxs}
              offers={offers}
              setOffers={setOffers}
              getAptCxObj={getAptCxObj}
              getReviewsForCx={getReviewsForCx}
            />
          </Route>
          <Route path='/aptComplexes'>
            <AptCxOrg
              aptCxs={aptCxs}
              setAptCxs={setAptCxs}
              getOffersForCx={getOffersForCx}
              getReviewsForCx={getReviewsForCx}
              getAptCxObj={getAptCxObj}
            />
          </Route>
          <Route path='/students'>
            <StudentOrg students={students} setStudents={setStudents} offers={offers} />
          </Route>
          <Route path='/reviews'>
            <ReviewsOrg
              aptCxs={aptCxs}
              reviews={reviews}
              setReviews={setReviews}
              getAptCxObj={getAptCxObj}
            />
          </Route>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default MainOrg;
