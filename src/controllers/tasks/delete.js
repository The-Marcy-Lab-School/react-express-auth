async function deleteTask(req, res) {
    try {
        const { Task } = req.db;
        const taskId = req.params.taskId;
        const authenticatedUserId = req.session.userId;

        if (!authenticatedUserId) {
            return res.status(401).send('User not authenticated');
        }

        const task = await Task.getTask(taskId);

        if (!task) {
            return res.status(404).send('Task not found');
        }

        if (task.user_id !== authenticatedUserId) {
            return res.status(403).send('Unauthorized to delete this task');
        }

        await Task.deleteTask(taskId);
        res.status(200).send('Task successfully deleted');
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = deleteTask;
