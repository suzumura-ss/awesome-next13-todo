import React from 'react';
import { render } from '@testing-library/react';
import Home from '@src/app/page';

jest.mock('@src/lib/todo');

describe(Home, () => {
  it('renders correctly', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
