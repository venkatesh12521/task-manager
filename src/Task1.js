
import React, { useState } from 'react';
import TaskForm from './TaskColumn';
import './style.css';



function TaskList({ tasks, addTask, deleteTask,moveTask}) {
  const [showTaskForm, setShowTaskForm] = useState(false);
 

  const toggleTaskForm = () => {
    setShowTaskForm(!showTaskForm);
  };


  const getStatusTasks = (status) => tasks.filter(task => task.status === status);
// Moves task from one status to other status
  const moveTaskToStatus = (taskId, newStatus) => {
    moveTask(taskId, newStatus);
  };


  const formatDate = (dateString) => {
    if (dateString && !isNaN(Date.parse(dateString))) {
      const date = new Date(dateString);
      return date.toLocaleDateString(); // Formats the date to a local date string
    } else {
      return 'Invalid date'; // Fallback text if the date is not valid
    }
  };


  return (
    <div className='main-container'>
      
      <button className='addtask' onClick={toggleTaskForm}>{showTaskForm ? 'Cancel' : 'Add Task'}</button>
      
      {showTaskForm && <div className="task-form"><TaskForm addTask={addTask} /></div>}
      {/* Task list goes here */}
      <h4>Task List</h4>
      <div className="task-columns">
        <div className="task-column">
          <div className='task-status'>

            {/* Pending status */}
            <h3>Pending</h3>
          {getStatusTasks('Pending').map((task) => (
            <div key={task.id} className="task">
              <div className='inner'><h4> {task.title}</h4><hr></hr>
              <div>Description: {task.description}</div>
                 <p>Start Date: {formatDate(task.startDate)}</p>
              <div><b>@ {task.assignee}</b></div>
              <div className='b'> {task.priority}</div>
              
                <button className='deletetask'  onClick={() => deleteTask(task.id) }>Delete Task</button>
                <button className='deletetask' onClick={() => moveTaskToStatus(task.id, 'In Progress')}>Move to In Progress</button>
              
              </div></div>
          ))}
          </div>
          </div>

          {/* In Progress status */}
        <div className="task-column">
          <h3 className='inprogress'>In Progress</h3>
          {getStatusTasks('In Progress').map((task) => (
            <div key={task.id} className="task">
              <div className='inner'>
              <h4>{task.title}</h4><hr></hr>
               <div>Description: {task.description}</div>
               <p>Start Date: {formatDate(task.startDate)}</p>
              <div><b>@{task.assignee}</b></div>
              <div className='b'>{task.priority}</div>
            
              <button className='deletetask' onClick={() => deleteTask(task.id)}>Delete Task</button>
              <button className='deletetask' onClick={() => moveTaskToStatus(task.id, 'Completed')}>Move to Completed</button>
              
            </div></div>
          ))}
        </div>


        {/* Completed status */}
        <div className="task-column">
          <h3 className='completed'>Completed</h3>
          {getStatusTasks('Completed').map((task) => (
            <div key={task.id} className="task">
              <div className='inner'>
              <h4>{task.title}</h4><hr></hr>
               <div>Description: {task.description}</div>
               <p>Start Date: {formatDate(task.startDate)}</p>
              <div><b>@{task.assignee}</b></div>
              <div className='b'> {task.priority}</div>
              
              <button className='deletetask' onClick={() => deleteTask(task.id)}>Delete Task</button>
            </div></div>
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default TaskList;