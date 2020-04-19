import React from 'react';
import { Link } from 'react-router-dom';

const rowStyle = {
  textAlign: 'left',
  padding: '8px'
};

function Student({ student, setMode, setCurStudent, deleteStudent }) {
  let editStudent = event => {
    setMode('edit');
    setCurStudent(student);
  };
  let deleteClick = () => {
    deleteStudent(student);
  };

  const currentId = '?id=' + student.id;
  return (
    <tr>
      <td>
        <Link to={{ pathname: '/students', search: currentId }}>{student.fName}</Link>
      </td>
      <td style={rowStyle}> {student.lName} </td>
      <td style={rowStyle}> {student.insta}</td>
      <td style={rowStyle}> {student.majors} </td>
      <td style={rowStyle}> {student.email}</td>
      <td>
        <button onClick={event => editStudent(event)}>Edit Student</button>
        <button onClick={event => deleteClick(event)}>Delete</button>
      </td>
    </tr>
  );
}

export default Student;
