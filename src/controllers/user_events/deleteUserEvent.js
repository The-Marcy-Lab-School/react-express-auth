const deleteUserEvent = async (req, res) => {
  try {
    const { UserEvent } = req.db;
    const { userId, eventId } = req.params;
    await UserEvent.delete(userId, eventId);
    res.status(200).send({ message: "User event deleted successfully." });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Error deleting user event" });
  }
};

module.exports = deleteUserEvent;
