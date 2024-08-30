import React, { useState } from 'react';

// Sample initial todos
const initialTodos = [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Write Tests", completed: false }
];

const TodoList = () => {
    const [todos, setTodos] = useState(initialTodos);
    const [newTodo, setNewTodo] = useState('');

    // Function to add a new todo
    const addTodo = () => {
        if (newTodo.trim()) {
            setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
            setNewTodo('');
        }
    };

    // Function to toggle completion status
    const toggleTodo = (id) => {
        setTodos(todos.map(todo => (
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )));
    };

    // Function to delete a todo
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {todos.map(todo => (
                    <li
                        key={todo.id}
                        onClick={() => toggleTodo(todo.id)}
                        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                    >
                        {todo.text}
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add new todo"
            />
            <button onClick={addTodo}>Add Todo</button>
        </div>
    );
};

export default TodoList;
