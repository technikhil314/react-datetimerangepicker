import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { App } from './app';

test('shows the children when the checkbox is checked', () => {
  const { container } = render(<App name="demo"></App>);
  expect(screen.getByTestId('app')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
