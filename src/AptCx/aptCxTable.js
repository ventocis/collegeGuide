import React from 'react';
import AptCx from './aptCx.js';

function AptCxTable({ setMode, aptCxs, setCurAptCx, deleteAptCx, offers }) {
  if (aptCxs.length > 0) {
    return (
      <div className='container-fluid'>
        <div className='row justify-content-center'>
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
        </div>
      </div>
    );
  } else {
    return <h5>Loading</h5>;
  }
}

export default AptCxTable;
