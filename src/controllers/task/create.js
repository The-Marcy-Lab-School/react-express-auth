const createTask = async (req, res) => {
    const {
        db: { Task }, // Assuming Task is your Task model
        body: { taskname, description, userId }, // Extract task details and user ID from request body
    } = req;

 const newTask = await Task.create(taskname, description,userId);
 res.status(201).send(newTask);
}

module.exports = createTask;