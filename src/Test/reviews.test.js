import React from 'react';
import {
  render,
  act,
  fireEvent,
  screen,
  getByDisplayValue
} from '@testing-library/react';
import ReviewsOrg from '../Reviews/reviewsOrg';
import '@testing-library/jest-dom/extend-expect';
import MemoryRouter from 'react-router-dom';
import EditReview from 'src/Reviews/editReview';

describe('Reviews', () => {
  let aptCxs = [
    {
      id: '1',
      city: 'Allendale',
      email: 'thelodge@achliving.com',
      name: 'The Lodge',
      streetAddr: '123 Main St'
    },
    {
      id: '2',
      city: 'Allendale',
      email: 'livethealpine@achliving.com',
      name: 'Alpine',
      streetAddr: '10452 Lodge Dr'
    }
  ];

  let curReview = {
    aptCxName: '',
    stars: '',
    reviewTxt: '',
    numBeds: '',
    numBaths: '',
    rent: '',
    utils: '',
    isFrn: ''
  };

  let submitCallBack = jest.fn();
  let updateCurReview = jest.fn();

  let mode = 'empty';

  it('loads reviews', async () => {
    let { getByText } = render(
      <EditReview
        aptCxs={aptCxs}
        mode={mode}
        curReview={curReview}
        submitCallback={submitCallBack}
        updateCurReview={updateCurReview}
      />
    );
    getByText('Write Your Review');
    getByText('Your Rating (out of five stars)');
    getByText('Apartment Complex');
    getByText('Alpine');
    getByText('The Lodge');
  });

  it('populates fields correctly', async () => {
    let { container } = render(
      <EditReview
        aptCxs={aptCxs}
        mode={mode}
        curReview={curReview}
        submitCallback={submitCallBack}
        updateCurReview={updateCurReview}
      />
    );

    let stars = container.querySelector('#stars');
    expect(stars.value).toBe('');

    let aptCxEl = container.querySelector('#aptCxName');
    expect(aptCxEl.value).toBe('');

    let numBedsEl = container.querySelector('#numBeds');
    expect(numBedsEl.value).toBe('');

    let numBathsEl = container.querySelector('#numBaths');
    expect(numBathsEl.value).toBe('');

    let rentEl = container.querySelector('#rent');
    expect(rentEl.value).toBe('');

    let utilsEl = container.querySelector('#utils');
    expect(utilsEl.value).toBe('');
  });

  it('accepts edits correctly', async () => {
    let { container } = render(
      <EditReview
        aptCxs={aptCxs}
        mode={mode}
        curReview={curReview}
        submitCallback={submitCallBack}
        updateCurReview={updateCurReview}
      />
    );

    let stars = container.querySelector('#stars');
    stars.value = '2';
    expect(stars.value).toBe('2');

    let numBedsEl = container.querySelector('#numBeds');
    numBedsEl.value = '3';
    expect(numBedsEl.value).toBe('3');

    let numBathsEl = container.querySelector('#numBaths');
    numBathsEl.value = '5';
    expect(numBathsEl.value).toBe('5');

    let rentEl = container.querySelector('#rent');
    rentEl.value = '500';
    expect(rentEl.value).toBe('500');

    let utilsEl = container.querySelector('#utils');
    utilsEl.value = '44';
    expect(utilsEl.value).toBe('44');
  });

  it('checks incorrect input', async () => {
    let { container } = render(
      <EditReview
        aptCxs={aptCxs}
        mode={mode}
        curReview={curReview}
        submitCallback={submitCallBack}
        updateCurReview={updateCurReview}
      />
    );

    let stars = container.querySelector('#stars');
    stars.value = 'dsa';
    expect(stars.value).toBe('');

    let numBedsEl = container.querySelector('#numBeds');
    numBedsEl.value = 'dsa';
    expect(numBedsEl.value).toBe('');

    let numBathsEl = container.querySelector('#numBaths');
    numBathsEl.value = 'sdf';
    expect(numBathsEl.value).toBe('');

    let rentEl = container.querySelector('#rent');
    rentEl.value = '5asdf';
    expect(rentEl.value).toBe('');

    let utilsEl = container.querySelector('#utils');
    utilsEl.value = 'sa';
    expect(utilsEl.value).toBe('');
  });

  it('calls function correctly', async () => {
    let { getByText, container } = render(
      <EditReview
        aptCxs={aptCxs}
        mode={mode}
        curReview={curReview}
        submitCallback={submitCallBack}
        updateCurReview={updateCurReview}
      />
    );

    let createBut = getByText('Create');
    fireEvent.click(createBut);
    expect(submitCallBack).toHaveBeenCalledTimes(1);
  });
});
