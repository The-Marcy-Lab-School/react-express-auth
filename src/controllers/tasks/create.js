async function createTask(req, res) {
    try {
        const { Task } = req.db;
        const userId = req.session.userId; // Use the authenticated user's ID

        if (!userId) {
            return res.status(401).send('User not authenticated');
        }

        const taskData = req.body;
        const newTask = await Task.createTask(userId, taskData);

        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = createTask;
