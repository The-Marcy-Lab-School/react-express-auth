const User = require("../../db/models/user");
const deleteUser = async (req, res) => {
    try {
        const userId = req.session.userId; // or req.params.userId, based on your setup
        const user = await User.find(userId);
        
        if (!user) {
            return res.status(404).send('User not found');
        }

        await User.delete(userId);
        res.sendStatus(200); // OK status
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');

    }
}
module.exports = deleteUser