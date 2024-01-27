import React from 'react';
import { deleteTask } from '../apiMethods/api';

const DeleteTask = ({ taskId, onTaskDeleted }) => {
    const handleDelete = async () => {
        try {
            await deleteTask(taskId);
            onTaskDeleted(taskId);
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    return (
        <button onClick={handleDelete}>Delete Task</button>
    );
};

export default DeleteTask;
