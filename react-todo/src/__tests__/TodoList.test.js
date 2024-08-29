import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

test('renders TodoList component', () => {
  render(<TodoList />);
  expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText(/Add a new todo/i), {
    target: { value: 'New Todo' },
  });
  fireEvent.click(screen.getByText(/Add Todo/i));
  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

test('toggles todo completion', () => {
  render(<TodoList />);
  fireEvent.click(screen.getByText(/Learn React/i));
  expect(screen.getByText(/Learn React/i)).toHaveStyle('text-decoration: line-through');
});

test('deletes a todo', () => {
  render(<TodoList />);
  fireEvent.click(screen.getByText(/Delete/i));
  expect(screen.queryByText(/Learn React/i)).not.toBeInTheDocument();
});
