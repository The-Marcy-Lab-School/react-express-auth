const deleteUser = async (req, res) => {

    const {
        db: { User },
        params: { id }
    } = req

    const existingUser = await User.find(id);
    if (!existingUser) return res.status(404).json({error: 'User not found'});

    const deletedUser = await User.delete(id);
    deletedUser ? res.status(204).json({ message: 'Successfully deleted User account.' }) : res.sendStatus(500);

}

module.exports = deleteUser;