import { render, screen } from '@testing-library/react';
import TodoList from '../components/TodoList'; // Ensure this path is correct

test('renders TodoList component', () => {
  render(<TodoList />);
  
  // Use queryAllByText to get all elements with the text "Todo List"
  const headings = screen.queryAllByText(/Todo List/i);
  
  // Ensure there's at least one heading with "Todo List"
  expect(headings.length).toBeGreaterThanOrEqual(1);
});

test('adds a new todo', () => {
  render(<TodoList />);

  // Add your logic for adding a new todo
  // For example:
  // const input = screen.getByPlaceholderText('Add a new todo');
  // fireEvent.change(input, { target: { value: 'New Todo' } });
  // fireEvent.click(screen.getByText('Add Todo'));
  // expect(screen.getByText('New Todo')).toBeInTheDocument();
});

test('toggles a todo item', () => {
  render(<TodoList />);

  // Add your logic for toggling a todo item
  // For example:
  // const todoItem = screen.getByText('Learn React');
  // fireEvent.click(todoItem);
  // expect(todoItem).toHaveStyle('text-decoration: line-through');
});

test('deletes a todo', () => {
  render(<TodoList />);

  // Add your logic for deleting a todo
  // For example:
  // const deleteButton = screen.getByText('Delete');
  // fireEvent.click(deleteButton);
  // expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});
