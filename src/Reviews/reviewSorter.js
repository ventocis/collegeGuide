import React from 'react';

function reviewSorter({ curOffFilt, updateCurOffFilt }) {
  return (
    <div className='row'>
      <div className='col'>
        <h5>Bathrooms</h5>
        <select
          className='form-control'
          id='minBathsFilt'
          onChange={event => updateCurOffFilt('numBaths', event.target.value)}
        >
          <option value='' defaultValue>
            Show All
          </option>
          <option value='1'>1+</option>
          <option value='2'>2+</option>
          <option value='3'>3+</option>
          <option value='4'>4+</option>
          <option value='4.5'>4.5+</option>
        </select>
      </div>
      <div className='col'>
        <h5>Bedrooms</h5>
        <select
          class='form-control'
          id='numBedsFilt'
          onChange={event => updateCurOffFilt('numBeds', event.target.value)}
        >
          <option value='' defaultValue>
            Show All
          </option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
        </select>
      </div>
      <div className='col'>
        <h5>Sort</h5>
        <select
          class='form-control'
          id='sort'
          onChange={event => updateCurOffFilt('sort', event.target.value)}
        >
          <option value='rate+'>Monthly Rate: Increasing</option>
          <option value='rate-'>Monthly Rate: Decreasing</option>
          <option value='numBeds+'>Beds: Increasing</option>
          <option value='numBeds-'>Beds: Decreasing</option>
          <option value='numBaths+'>Bathrooms: Increasing</option>
          <option value='numBaths-'>Bathrooms: Decreasing</option>
          <option value='sqFt+'>Square Feet: Increasing</option>
          <option value='sqFt-'>Square Feet: Decreasing</option>
        </select>
      </div>
    </div>
  );
}

export default reviewSorter;
