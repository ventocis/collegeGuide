import React from 'react';
import { db } from '../firebase';

function StudentView({ students, id, getOffersForCx }) {
  let curStudent = students.filter(student => student.id === id);
  let myStudent = curStudent[0];

  db.collection('offers')
    .where('numBeds', '==', '4')
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {});
    })
    .catch(function(error) {});

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
      </div>
    );
  } else {
    return <h1>Empty</h1>;
  }
}

export default StudentView;
