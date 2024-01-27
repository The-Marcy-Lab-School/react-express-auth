const deleteUser = async (req, res) => {
    try {
        const userIdToDelete = req.params.userId;
        const authenticatedUserId = req.session.userId; // Use userId from session

        // Check if the authenticated user is the same as the user to be deleted
        if (userIdToDelete !== authenticatedUserId) {
            return res.status(403).send('Unauthorized to delete this user');
        }

        await req.db.User.deleteUser(userIdToDelete);
        res.status(200).send('User successfully deleted');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = deleteUser;
