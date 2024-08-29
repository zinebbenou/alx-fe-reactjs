// src/components/TodoList.js
import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([
    'Learn React',
    'Build a Todo List',
    'Write Tests'
  ]);

  const addTodo = (event) => {
    event.preventDefault();
    const newTodo = event.target.elements.todo.value;
    setTodos([...todos, newTodo]);
    event.target.elements.todo.value = '';
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index] = newTodos[index].startsWith('~') ? newTodos[index].substring(1) : `~${newTodos[index]}`;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={addTodo}>
        <input name="todo" placeholder="Add a new todo" />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} onClick={() => toggleTodo(index)} style={{ textDecoration: todo.startsWith('~') ? 'line-through' : 'none', cursor: 'pointer' }}>
            {todo}
            <button onClick={() => deleteTodo(index)} style={{ marginLeft: '10px' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
