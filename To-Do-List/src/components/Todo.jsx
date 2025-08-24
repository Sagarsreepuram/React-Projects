import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    const name = text.trim();
    if (!name) return;
    const newTodo = { id: Date.now(), name, done: false };
    setTodos([newTodo, ...todos]);
    setText("");
  };

  const toggleTodo = (id) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className="app">
      <h1>To-Do</h1>
      <form onSubmit={addTodo} className="row">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a task and press Enter"
          autoFocus
        />
        <button type="submit">Add</button>
      </form>

      <ul className="list">
        {todos.length === 0 && <li className="empty">No Tasks</li>}
        {todos.map((t) => (
          <li key={t.id} className="item">
            <label>
              <input
                type="checkbox"
                checked={t.done}
                onChange={() => toggleTodo(t.id)}
              />
              <span className={t.done ? "done" : ""}> {t.name} </span>
            </label>
            <button className="delete" onClick={() => deleteTodo(t.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
