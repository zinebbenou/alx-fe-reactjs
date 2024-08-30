// src/__tests__/TodoList.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from '../components/TodoList'; // Adjust import path based on actual location
import { act } from 'react'; // Updated import

describe('TodoList', () => {
  test('renders TodoList component', () => {
    render(<TodoList />);
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });
});
