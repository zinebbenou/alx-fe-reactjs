// src/__tests__/TodoList.test.js

import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders TodoList component', () => {
  render(<TodoList />);
  const heading = screen.getByText(/Todo List/i);
  expect(heading).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText(/Add a new todo/i);
  const button = screen.getByText(/Add Todo/i);
  
  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(button);
  
  const newTodo = screen.getByText(/New Todo/i);
  expect(newTodo).toBeInTheDocument();
});

test('toggles a todo item', () => {
  render(<TodoList />);
  const todoItem = screen.getByText(/Learn React/i);
  
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle('text-decoration: line-through');
  
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle('text-decoration: none');
});

test('deletes a todo', () => {
  render(<TodoList />);
  const deleteButton = screen.getAllByText(/Delete/i)[0];
  
  fireEvent.click(deleteButton);
  const todoItem = screen.queryByText(/Learn React/i);
  expect(todoItem).not.toBeInTheDocument();
});
