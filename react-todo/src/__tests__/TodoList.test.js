import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import here
import TodoList from '../TodoList';

describe('TodoList Component', () => {
  test('renders initial todos correctly', () => {
    render(<TodoList />);
    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems.length).toBe(2);
    expect(todoItems[0]).toHaveTextContent('Learn React');
  });
});
