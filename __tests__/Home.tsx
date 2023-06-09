import React from 'react';
import { render } from '@testing-library/react';
import Home from '@src/app/page';

describe(Home, () => {
  it('renders correctly', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
