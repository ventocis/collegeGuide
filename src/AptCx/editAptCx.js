import React from 'react';

function ShowAptCx({ curAptCx, mode, submitCallback, updateCurAptCx, cancelClick }) {
  let formSubmitted = event => {
    event.preventDefault();
    submitCallback({ ...curAptCx });
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

  return (
    <div className='aptCx-form form-group'>
      <h1> Make A New Apartment </h1>
      <form onSubmit={formSubmitted}>
        <div className='form-group'>
          <label style={labelStyle}>Name</label>
          <input
            type='text'
            style={formControl}
            autoComplete='given-name'
            name='name'
            id='name'
            placeholder='Apt Complex Name'
            value={curAptCx.name}
            onChange={event => updateCurAptCx('name', event.target.value)}
          />
        </div>
        <div className='form-group'>
          <label style={labelStyle} htmlFor='streetAddr'>
            Address
          </label>
          <input
            type='text'
            style={formControl}
            autoComplete='family-name'
            name='streetAddr'
            id='streetAddr'
            placeholder='Street Address'
            value={curAptCx.streetAddr}
            onChange={event => updateCurAptCx('streetAddr', event.target.value)}
          />
        </div>
        <div className='form-group'>
          <label style={labelStyle} htmlFor='city'>
            City
          </label>
          <input
            type='text'
            style={formControl}
            autoComplete='family-name'
            name='city'
            id='city'
            placeholder='City'
            value={curAptCx.city}
            onChange={event => updateCurAptCx('city', event.target.value)}
          />
        </div>
        <div className='form-group'>
          <label style={labelStyle} htmlFor='email'>
            Email Address
          </label>
          <input
            type='email'
            style={formControl}
            autoComplete='email'
            name='email'
            id='email'
            placeholder='name@example.com'
            value={curAptCx.email}
            onChange={event => updateCurAptCx('email', event.target.value)}
          />
        </div>
        {renderButtons()}
      </form>
    </div>
  );
}

export default ShowAptCx;
