import { useState } from 'react';
import "../index.css";

export default function HomePage() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setTodos((currentTodos) => [
      ...currentTodos,
      { id: crypto.randomUUID(), title: newItem, completed: false },
    ]);

    setNewItem("");  // Make sure this statement is outside the setTodos callback
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    });
  }

  return (
  <>
    <h1>RemindMe</h1>
    <form onSubmit={handleSubmit} className="new-task">
      <div className="form-row">
        <label htmlFor="item">New Task</label>
        <input
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        type="text"
        id="item"
        />
      </div>
      <button className='btn'>Add Task</button>
    </form>
    <div className="todo-list">
      <h1 className="taskTitle">Current Tasks</h1>
      <ul className="list">
        {todos.length === 0 && <p>No tasks found.</p>}
        {todos.map((item) => (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={(e) => toggleTodo(item.id, e.target.checked)}
              />
              {item.title}
            </label>
            <div className="delete-button">
              <button onClick={() => deleteTodo(item.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </>
  );
}
