import React from 'react';
import { Link } from 'react-router-dom';

const rowStyle = {
  textAlign: 'left',
  padding: '8px'
};

function AptCmplx({ aptCx, setMode, setCurAptCx, deleteAptCx }) {
  let editAptCx = event => {
    setMode('edit');
    setCurAptCx(aptCx);
  };

  let deleteClick = () => {
    deleteAptCx(aptCx);
  };

  const currentId = '?id=' + aptCx.id;
  return (
    <tr>
      <td>
        <Link to={{ pathname: '/aptcomplexes', search: currentId }}>{aptCx.name}</Link>
      </td>
      <td style={rowStyle}> {aptCx.streetAddr} </td>
      <td style={rowStyle}> {aptCx.city}</td>
      <td style={rowStyle}> {aptCx.email} </td>
      <td>
        <button onClick={event => editAptCx(event)}>Edit AptCx</button>
        <button onClick={event => deleteClick(event)}>Delete</button>
      </td>
    </tr>
  );
}

export default AptCmplx;
