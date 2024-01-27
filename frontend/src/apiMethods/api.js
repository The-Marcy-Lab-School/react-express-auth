// Function to create task
export const createTask = async (taskData, userId) => {
    try {
      const response = await fetch(`/users/${userId}/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify(taskData),
      });
      if (!response.ok) throw new Error('Error creating task');
      return await response.json();
    } catch (error) {
      console.error('Failed to create task:', error);
      throw error;
    }
  };
  
  // Function to delete task
  export const deleteTask = async (taskId) => {
    try {
      const response = await fetch(`/tasks/${taskId}`, {
        method: 'DELETE',
        
      });
      if (!response.ok) throw new Error('Error deleting task');
    } catch (error) {
      console.error('Failed to delete task:', error);
      throw error;
    }
  };
  

  