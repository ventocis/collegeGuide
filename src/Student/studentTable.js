import React from 'react';
import Student from './student';

const rowStyle = {
  textAlign: 'left',
  padding: '8px'
};

const tableStyle = {
  border: '1px solid black'
};

function StudentTable({ setMode, students, setCurStudent, deleteStudent, offers }) {
  if (students.length > 0) {
    return (
      <div>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={rowStyle}>First Name</th>
              <th style={rowStyle}>Last Name</th>
              <th style={rowStyle}>Instagram</th>
              <th style={rowStyle}>Majors(s)</th>
              <th style={rowStyle}>Email</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <Student
                setMode={setMode}
                student={student}
                key={index}
                setCurStudent={setCurStudent}
                deleteStudent={deleteStudent}
                offers={offers}
              />
            ))}
          </tbody>
        </table>
        <br></br>
      </div>
    );
  } else {
    return (
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={rowStyle}>First Name</th>
            <th style={rowStyle}>Last Name</th>
            <th style={rowStyle}>Instagram</th>
            <th style={rowStyle}>Major(s)</th>
            <th style={rowStyle}>Email</th>
          </tr>
        </thead>
      </table>
    );
  }
}

export default StudentTable;
