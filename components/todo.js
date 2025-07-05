import React, { useState } from 'react';
function TodoApp() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);
  const handleAdd = () => {
    if (task.trim() != '') {
      setTodos([...todos, task]);
      setTask('');
    }
  };
  const handleDelete = (indexToRemove) => {
    const updatedTodos = todos.filter((todo, index) => {
      return index !== indexToRemove;
    });
    setTodos(updatedTodos);
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Todo List</h2>
      <input type="text"
        value={task}
        placeholder="Enter your task"
        onChange={(e) => setTask(e.target.value)}
        style={{ padding: '8px', width: '250px' }}/>
      <button
        onClick={handleAdd}
        style={{marginLeft: '10px',padding: '8px 15px',
          backgroundColor: '#28a745',border: 'none',
          borderRadius: '5px'}}>Add</button>
      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            {todo}
            <button
              onClick={() => handleDelete(index)}
              style={{marginLeft: '10px',backgroundColor: 'red',
                color: 'white',border: 'none',
                borderRadius: '5px',padding: '5px 10px',
                cursor: 'pointer'}}>Delete</button>
          </li>
        ))}
      </ul>
      {todos.length === 0 && <p>No tasks yet!</p>}
    </div>
  );
}
export default TodoApp;