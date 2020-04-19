import React from 'react';
import { db } from '../firebase';

function ShowStudent({
  curStudent,
  mode,
  submitCallback,
  updateCurStudent,
  cancelClick,
  offers
}) {
  let formSubmitted = event => {
    event.preventDefault();
    submitCallback({ ...curStudent });
  };

  let cancelClickHndlr = event => {
    event.preventDefault();
    cancelClick();
  };

  const formControl = {
    width: '130px'
  };

  const labelStyle = {
    display: 'inline-block',
    width: '115px'
  };

  let renderButtons = () => {
    if (mode === 'edit') {
      return (
        <div>
          <button type='submit' className='saveBtn'>
            Save
          </button>
          <button type='submit' className='cancelBtn' onClick={cancelClickHndlr}>
            Cancel
          </button>
        </div>
      );
    } else {
      return (
        <button type='submit' className='submitBtn'>
          Create
        </button>
      );
    }
  };

  async function getStudentOffers(off) {
    let aptCxName = '';
    let aptCx = db.collection('aptCmplxs').doc(off.aptCxId);
    aptCxName = await aptCx.get().then(doc => {
      return doc.data().name;
    });
    return aptCxName;
  }

  return (
    <div className='student-form form-group'>
      <h1> Make A New Student </h1>
      <form onSubmit={formSubmitted}>
        <div className='form-group'>
          <label style={labelStyle}>First Name</label>
          <input
            type='text'
            style={formControl}
            autoComplete='given-fName'
            name='fName'
            id='fName'
            value={curStudent.fName}
            onChange={event => updateCurStudent('fName', event.target.value)}
          />
        </div>
        <div className='form-group'>
          <label style={labelStyle} htmlFor='lName'>
            Last Name
          </label>
          <input
            type='text'
            style={formControl}
            autoComplete='family-lName'
            name='lName'
            id='lName'
            value={curStudent.lName}
            onChange={event => updateCurStudent('lName', event.target.value)}
          />
        </div>
        <div className='form-group'>
          <label style={labelStyle} htmlFor='insta'>
            Instagram
          </label>
          <input
            type='text'
            style={formControl}
            autoComplete='family-insta'
            name='insta'
            id='insta'
            placeholder='yourhandle'
            pattern='^([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)$'
            title='Enter your username'
            value={curStudent.insta}
            onChange={event => updateCurStudent('insta', event.target.value)}
          />
        </div>
        <div className='form-group'>
          <label style={labelStyle} htmlFor='majors'>
            Major(s)
          </label>
          <input
            type='text'
            style={formControl}
            autoComplete='family-majors'
            name='majors'
            id='majors'
            value={curStudent.majors}
            onChange={event => updateCurStudent('majors', event.target.value)}
          />
        </div>
        <div className='form-group'>
          <label style={labelStyle} htmlFor='email'>
            Email
          </label>
          <input
            type='email'
            style={formControl}
            autoComplete='email'
            name='email'
            id='email'
            placeholder='name@xyz.com'
            value={curStudent.email}
            onChange={event => updateCurStudent('email', event.target.value)}
          />
        </div>

        <h5> Where have you lived previously?</h5>
        {offers.map(off => {
          if ('hi' !== '') {
            return (
              <div>
                <input
                  type='checkbox'
                  id={off.id}
                  name={off.id}
                  value={off.id}
                  checked={curStudent.offerIds[off.id]}
                  onChange={event => updateCurStudent('offerIds', event.target.value)}
                />
                <label>
                  {off.aptCxName} {off.numBeds} beds {off.numBaths} baths
                </label>
              </div>
            );
          } else {
            return <h1>loading</h1>;
          }
        })}

        {renderButtons()}
      </form>
    </div>
  );
}

export default ShowStudent;
