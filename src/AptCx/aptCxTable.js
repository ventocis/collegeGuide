import React from 'react';
import AptCx from './aptCx.js';

const rowStyle = {
  textAlign: 'left',
  padding: '8px'
};

const tableStyle = {
  border: '1px solid black'
};

function AptCxTable({ setMode, aptCxs, setCurAptCx, deleteAptCx, offers }) {
  if (aptCxs.length > 0) {
    return (
      <div>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={rowStyle}>Apt Complex Name</th>
              <th style={rowStyle}>Street Address</th>
              <th style={rowStyle}>City</th>
              <th style={rowStyle}>Email</th>
            </tr>
          </thead>
          <tbody>
            {aptCxs.map((aptCx, index) => (
              <AptCx
                setMode={setMode}
                aptCx={aptCx}
                key={index}
                setCurAptCx={setCurAptCx}
                deleteAptCx={deleteAptCx}
                offers={offers}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={rowStyle}>Apt Complex Name</th>
            <th style={rowStyle}>Street Address</th>
            <th style={rowStyle}>City</th>
            <th style={rowStyle}>Email</th>
          </tr>
        </thead>
      </table>
    );
  }
}

export default AptCxTable;
