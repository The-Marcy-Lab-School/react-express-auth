import React, { useState } from 'react';
import { createTask } from '../apiMethods/api'; 

const TaskCreateForm = ({ userId, onTaskCreated }) => {
  const [taskData, setTaskData] = useState({ taskname: '', description: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newTask = await createTask(userId, taskData);
      onTaskCreated(newTask);
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const handleChange = (event) => {
    setTaskData({ ...taskData, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="taskname"
        value={taskData.taskname}
        onChange={handleChange}
        placeholder="Task Name"
        required
      />
      <textarea
        name="description"
        value={taskData.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <button type="submit">Create Task</button>
    </form>
  );
};

export default TaskCreateForm;
