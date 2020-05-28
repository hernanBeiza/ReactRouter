import React from 'react';
import { render } from '@testing-library/react';
import ItemDetail from './ItemDetail';

test('renders learn react link', () => {
  const { getByText } = render(<ItemDetail />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
