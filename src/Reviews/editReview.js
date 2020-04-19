import React from 'react';

function EditReview({
  aptCxs,
  curReview,
  mode,
  submitCallback,
  updateCurReview,
  cancelClick
}) {
  // console.log(aptCxs);
  // console.log(curReview);
  // console.log(mode);
  // console.log(submitCallback);
  // console.log(updateCurReview);
  // console.log(cancelClick);

  let formSubmitted = event => {
    event.preventDefault();
    submitCallback({ ...curReview });
  };

  return (
    <div className='container'>
      <div className='aptCx-form form-group'>
        <form onSubmit={formSubmitted}>
          <h1>Write Your Review </h1>
          <h5>Your review helps others decide where to live in the future :)</h5>
          <div className='form-group'>
            <label htmlFor='stars'>Your Rating (out of five stars)</label>
            <input
              type='number'
              className='form-control'
              autoComplete='off'
              name='stars'
              id='stars'
              min='1'
              max='5'
              value={curReview.stars}
              onChange={event => updateCurReview('stars', event.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='aptCxName'>Apartment Complex</label>
            <select
              className='form-control'
              name='aptCxName'
              id='aptCxName'
              value={curReview.aptCx}
              onChange={event => updateCurReview('aptCxId', event.target.value)}
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
            <label htmlFor='numBeds'>Number of Bedrooms</label>
            <input
              type='number'
              className='form-control'
              autoComplete='off'
              name='numBeds'
              id='numBeds'
              value={curReview.numBeds}
              onChange={event => updateCurReview('numBeds', event.target.value)}
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
              value={curReview.numBaths}
              onChange={event => updateCurReview('numBaths', event.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='rent'>Monthly Rate</label>
            <input
              type='number'
              className='form-control'
              autoComplete='off'
              name='rent'
              id='rent'
              value={curReview.rent}
              onChange={event => updateCurReview('rent', event.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='utils'>Total Avg Utility Cost per Month</label>
            <input
              type='number'
              className='form-control'
              autoComplete='off'
              name='utils'
              id='utils'
              value={curReview.utils}
              onChange={event => updateCurReview('utils', event.target.value)}
            />
          </div>
          <div className='form-check form-check-inline'>
            <label htmlFor='isFrn'>Furnished?</label>
          </div>
          <div className='form-check form-check-inline'>
            <input
              className='form-check-input'
              type='radio'
              name='isFrn'
              id='isFrn'
              value='Yes'
              onChange={event => updateCurReview('isFrn', event.target.value)}
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
              onChange={event => updateCurReview('isFrn', event.target.value)}
            />
            <label className='form-check-label' htmlFor='isFrn'>
              No
            </label>
          </div>
          <div>
            <label htmlFor='reviewTxt'>Your Review</label>
          </div>
          <div className='form-group'>
            <textarea
              className='col-12'
              value={curReview.reviewTxt}
              name='reviewTxt'
              rows='10'
              onChange={event => updateCurReview('reviewTxt', event.target.value)}
            ></textarea>
          </div>
          <div className='container'>
            <div className='row justify-content-center'>
              <button type='submit' className='col btn btn-secondary submitBtn'>
                Create
              </button>{' '}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditReview;
