import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assignee, setAssignee] = useState('');
  const [priority, setPriority] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const startDate = new Date();
    const task = {
      id: Math.floor(Math.random() * 10000),
      title,
      description,
      startDate,
      endDate: null,
      status: 'Pending',
      assignee,
      priority,
    };
    addTask(task);
    setTitle('');
    setDescription('');
    setAssignee('');
    setPriority('');
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <label>Description:</label>
        <textarea className='disc' type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <label>Assignee:</label>
        <input type="text" value={assignee} onChange={(e) => setAssignee(e.target.value)} required />
        <label>Priority:</label><div className='select'>
        <select value={priority} onChange={(e) => setPriority(e.target.value)} required>
          <option value="">Select Priority</option>
          <option value="P0">P0</option>
          <option value="P1">P1</option>
          <option value="P2">P2</option>
        </select></div>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default TaskForm;