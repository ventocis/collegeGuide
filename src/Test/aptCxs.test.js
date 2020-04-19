import React from 'react';
import {
  render,
  act,
  fireEvent,
  screen,
  getByDisplayValue
} from '@testing-library/react';
import ShowAptCx from '../AptCx/editAptCx';
import '@testing-library/jest-dom/extend-expect';

describe('Apartment Complexes', () => {
  let curAptCx = {
    id: '1',
    city: 'Allendale',
    email: 'thelodge@achliving.com',
    name: 'The Lodge',
    streetAddr: '123 Main St'
  };

  let mode = 'empty';

  let updateCurAptCx = jest.fn();
  let formSubmitted = jest.fn();
  let cancelClick = jest.fn();

  it('loads apartments', async () => {
    let { getByText } = render(
      <ShowAptCx
        mode={mode}
        curAptCx={curAptCx}
        updateCurAptCx={updateCurAptCx}
        submitCallback={formSubmitted}
        cancelClick={cancelClick}
      />
    );
  });
});
