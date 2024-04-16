import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskList from './Task1';

function App() {
  // Initialize tasks state directly from localStorage
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Save tasks to local storage on tasks state change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
// Adds task to TaskList
  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };
// Deletes task from Tasklist
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };
//Moves task from one status to other
  const moveTask = (taskId, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: newStatus };
        }
        return task;
      })
    );
  };

  return (
    <div className="App">
      <h1 className='head'>Task Board</h1>
      <img src='https://cdn-icons-png.flaticon.com/128/3177/3177440.png' alt='admin'></img>
      <TaskList tasks={tasks} addTask={addTask} deleteTask={deleteTask} moveTask={moveTask} />
    </div>
  );
}

export default App;
