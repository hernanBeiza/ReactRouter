import React from 'react';
import { render } from '@testing-library/react';
import About from './About';

test('renders learn react link', () => {
  const { getByText } = render(<About />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
