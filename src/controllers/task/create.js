const Task = require('../../db/models/task')

const createTask = async (req, res) => {
    const { taskname, description } = req.body; // Extract task details and user ID from request body

    try {
        const newTask = await Task.create( taskname, description);
        res.status(201).send(newTask);
    } catch (error) {
        res.status(500).send({ error: "Internal server error" });
        console.error(error);
    }
}

module.exports = createTask;
 