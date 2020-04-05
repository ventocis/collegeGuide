import React from 'react';

const rowStyle = {
  textAlign: 'left',
  padding: '8px'
};



function AptCmplx({ aptCx, setMode, setCurAptCx, deleteAptCx }) {
  let editAptCx = (event) => {
    setMode("edit")
    setCurAptCx(aptCx)
  }

  let deleteClick = () => {
    deleteAptCx(aptCx);
  }
  return (<tr>
    <td style={rowStyle}> {aptCx.name} </td>
    <td style={rowStyle}> {aptCx.streetAddr} </td>
    <td style={rowStyle}> {aptCx.city}</td>
    <td style={rowStyle}> {aptCx.email} </td>
    <td>
      <button onClick={event => editAptCx(event)}>Edit AptCx</button>
      <button onClick={event => deleteClick(event)}>Delete</button>
    </td>
  </tr>);
}

export default AptCmplx;

