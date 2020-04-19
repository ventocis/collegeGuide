import React from 'react';
import { Link } from 'react-router-dom';

const zoomStyle = {
  objectFit: 'cover'
};

function AptCx({ aptCx, setMode, setCurAptCx, deleteAptCx }) {
  let editAptCx = event => {
    setMode('edit');
    setCurAptCx(aptCx);
  };

  let deleteClick = () => {
    deleteAptCx(aptCx);
  };

  // aptCx.pic = '../Imgs/alpine-living-room.jpg';

  const currentId = '?id=' + aptCx.id;
  return (
    <div className='card col-md-3 m-3 p-0'>
      <div className='embed-responsive embed-responsive-4by3'>
        <img
          style={zoomStyle}
          src={aptCx.picUrl}
          className='card-img-top embed-responsive-item'
        ></img>
      </div>
      <div className='card-body'>
        <h5 className='card-title mb-1'></h5>
        <Link to={{ pathname: '/aptcomplexes', search: currentId }}>{aptCx.name}</Link>
        <p className='card-text'>
          {aptCx.streetAddr}
          <br></br>
          {aptCx.city}
          <br></br>
          {aptCx.email}
        </p>
      </div>
    </div>
  );
}

export default AptCx;
