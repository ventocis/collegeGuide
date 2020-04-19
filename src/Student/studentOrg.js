import React from 'react';
import ShowStudent from './editStudent';
import StudentTable from './studentTable';
import StudentView from './studentView';
import { db } from '../firebase.js';
import { Switch, Route, useLocation } from 'react-router-dom';

function StudentOrg({ students, setStudents, getOffersForCx, offers }) {
  ///Apt Cx Logic
  let emptyStudent = {
    fName: '',
    lName: '',
    insta: '',
    email: '',
    majors: '',
    offerIds: {}
  };

  const deleteStudent = student => {
    db.collection('students')
      .doc(student.id)
      .delete();
  };

  //options are edit, empty
  let [mode, setMode] = React.useState('empty');
  let [curStudent, setCurStudent] = React.useState(emptyStudent);

  let formSubmitted = student => {
    let matchingStudents = students.filter(curStudent => {
      return curStudent.email === student.email;
    });

    if (
      student.fName !== '' &&
      student.lName !== '' &&
      student.email !== '' &&
      student.majors !== ''
    ) {
      if (mode === 'empty') {
        if (matchingStudents.length === 0) {
          db.collection('students').add(student);
          setCurStudent(emptyStudent);
        } else {
          alert('New students need to have a unique email');
        }
      } else {
        db.collection('students')
          .doc(student.id)
          .set(student);
        setMode('empty');
        setCurStudent(emptyStudent);
      }
    } else {
      alert('Your info to be fully filled out & have a unique email');
    }
  };

  let cancelClick = () => {
    setMode('empty');
    setCurStudent(emptyStudent);
  };

  let changeMode = mode => {
    setMode(mode);
  };

  let updateCurStudent = (key, value) => {
    if (key === 'offerIds') {
      //check to make sure that none of the Ids are already in the student
      if (curStudent.offerIds[value]) {
        curStudent.offerIds[value] = false;
      } else {
        curStudent.offerIds[value] = true;
      }
    } else {
      let newStudent = { ...curStudent };
      newStudent[key] = value;

      setCurStudent(newStudent);
    }
  };

  const query = new URLSearchParams(useLocation().search);

  return (
    <Switch>
      <Route exact path='/students/view'>
        <ShowStudent
          mode={mode}
          curStudent={curStudent}
          updateCurStudent={updateCurStudent}
          submitCallback={formSubmitted}
          cancelClick={cancelClick}
          offers={offers}
        />
        <StudentTable
          students={students}
          setMode={changeMode}
          setCurStudent={setCurStudent}
          deleteStudent={deleteStudent}
        />
      </Route>
      <Route path='/students'>
        <StudentView
          students={students}
          id={query.get('id')}
          getOffersForCx={getOffersForCx}
        />
      </Route>
    </Switch>
  );
}

export default StudentOrg;
