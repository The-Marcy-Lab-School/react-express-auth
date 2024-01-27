async function updateTask(req, res) {
    try {
        const { Task } = req.db;
        const taskId = req.params.taskId;
        const taskData = req.body;
        const authenticatedUserId = req.session.userId;

        if (!authenticatedUserId) {
            return res.status(401).send('User not authenticated');
        }

        // Assuming Task.getTask returns the task with the specified ID
        const task = await Task.getTask(taskId);

        if (!task) {
            return res.status(404).send('Task not found');
        }

        // Check if the task belongs to the authenticated user
        if (task.userId !== authenticatedUserId) {
            return res.status(403).send('Unauthorized to update this task');
        }

        const updatedTask = await Task.updateTask(taskId, taskData);
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = updateTask;
