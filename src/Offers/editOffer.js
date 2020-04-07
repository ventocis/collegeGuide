import React from 'react';

function EditOffer({
  aptCxs,
  curOffer,
  mode,
  submitCallback,
  updateCurOffer,
  cancelClick
}) {
  let formSubmitted = event => {
    event.preventDefault();
    submitCallback({ ...curOffer });
  };

  let cancelClickHndlr = event => {
    event.preventDefault();
    cancelClick();
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
      <form onSubmit={formSubmitted}>
        <h1> Create A New Package </h1>
        <div className='form-group'>
          <label htmlFor='aptCxName'>Apartment Complex</label>
          <select
            className='form-control'
            name='aptCxName'
            id='aptCxName'
            value={curOffer.aptCx}
            onChange={event => updateCurOffer('aptCxId', event.target.value)}
          >
            <option></option>
            {aptCxs.map((aptCx, key) => {
              return (
                <option key={key} value={aptCx.id}>
                  {aptCx.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className='form-group'>
          <label>Number of Bedrooms</label>
          <input
            type='number'
            className='form-control'
            autoComplete='off'
            name='numBeds'
            id='numBeds'
            value={curOffer.numBeds}
            onChange={event => updateCurOffer('numBeds', event.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='numBaths'>Number of Bathrooms</label>
          <input
            type='number'
            className='form-control'
            autoComplete='off'
            name='numBaths'
            id='numBaths'
            value={curOffer.numBaths}
            onChange={event => updateCurOffer('numBaths', event.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='sqFt'>Sq Ft</label>
          <input
            type='number'
            className='form-control'
            autoComplete='off'
            name='sqFt'
            id='sqFt'
            value={curOffer.sqFt}
            onChange={event => updateCurOffer('sqFt', event.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='rate'>Monthly Rate</label>
          <input
            type='number'
            className='form-control'
            autoComplete='off'
            name='rate'
            id='rate'
            value={curOffer.rate}
            onChange={event => updateCurOffer('rate', event.target.value)}
          />
        </div>
        <div className='form-check form-check-inline'>
          <label>Furnished?</label>
        </div>
        <div className='form-check form-check-inline'>
          <input
            className='form-check-input'
            type='radio'
            name='isFrn'
            id='isFrn'
            value='Yes'
            onChange={event => updateCurOffer('isFrn', event.target.value)}
          />
          <label className='form-check-label' htmlFor='isFrn'>
            Yes
          </label>
        </div>
        <div className='form-check form-check-inline'>
          <input
            className='form-check-input'
            type='radio'
            name='isFrn'
            id='isFrn'
            value='No'
            onChange={event => updateCurOffer('isFrn', event.target.value)}
          />
          <label className='form-check-label' htmlFor='isFrn'>
            No
          </label>
        </div>

        {renderButtons()}
      </form>
    </div>
  );
}

export default EditOffer;
