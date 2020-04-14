import React from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase';

function StudentView({ students, id, getOffersForCx }) {
  let curStudent = students.filter(student => student.id === id);
  let myStudent = curStudent[0];
  let studentName = '';
  let queryStr = '';

  // let myOffers = [];

  // if (myStudent) {
  //   myOffers = getRForCx(myStudent.id);
  // } else {
  //   return <h1></h1>;
  // }

  db.collection('offers')
    .where('numBeds', '==', '4')
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        console.log('hi' + doc.data());
      });
    })
    .catch(function(error) {
      console.log('error');
    });

  // if (myStudent && myOffers) {
  if (myStudent) {
    return (
      <div>
        <h1>
          {myStudent.fName} {myStudent.lName}
        </h1>
        <p>Instagram: @{myStudent.insta}</p>
        <p>Email: {myStudent.email}</p>
        <p>Major: {myStudent.majors}</p>
        <p>etc.</p>

        {/* <h5>Packages</h5>
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
        })} */}
      </div>
    );
  } else {
    return <h1>Empty</h1>;
  }
}

export default StudentView;
