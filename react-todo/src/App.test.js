import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'; // Adjust the import path if necessary
import { act } from 'react'; // Updated import

// Ensure you clear all timers after each test
afterEach(() => {
  jest.clearAllTimers();
});

test('renders Todo List', () => {
  render(<App />);
  const headingElement = screen.getByText(/Todo List/i);
  expect(headingElement).toBeInTheDocument();
});
