import React from 'react';
import { render } from '@testing-library/react';
import Home from '@src/app/page';

jest.mock('@backend/todo');

async function resolvedComponent<T>(Component: (props: T) => Promise<React.JSX.Element>, props: T) {
  const ComponentResolved = await Component(props);
  return () => ComponentResolved;
}

describe(Home, () => {
  it('renders correctly', async () => {
    const HomeResolved = await resolvedComponent(Home, {});

    const { container } = render(<HomeResolved />);
    expect(container).toMatchSnapshot();
  });
});
