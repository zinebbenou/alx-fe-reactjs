// src/__tests__/TodoList.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders TodoList component', () => {
  render(<TodoList />);
  // Ensure there's at least one heading with "Todo List"
  const headings = screen.queryAllByText(/Todo List/i);
  expect(headings.length).toBeGreaterThanOrEqual(1);
});

test('adds a new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText('Add a new todo');
  const button = screen.getByText('Add Todo');
  
  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(button);
  
  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

test('toggles a todo item', () => {
  render(<TodoList />);
  const todo = screen.getByText('Learn React');
  
  fireEvent.click(todo);
  
  expect(todo).toHaveStyle('text-decoration: line-through');
  
  fireEvent.click(todo);
  
  expect(todo).toHaveStyle('text-decoration: none');
});

test('deletes a todo', () => {
  render(<TodoList />);
  const todo = screen.getByText('Learn React');
  const deleteButton = screen.getAllByText('Delete')[0];
  
  fireEvent.click(deleteButton);
  
  expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});
