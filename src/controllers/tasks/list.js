async function listTasks(req, res) {
    try {
        const { Task } = req.db;
        const userId = req.params.userId;
        const tasks = await Task.getTasksForUser(userId);

        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = listTasks;
