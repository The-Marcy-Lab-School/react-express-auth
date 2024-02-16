const deleteNotifications = async (req, res) => {
    const {
        db: { Notification },
        params: { userId},
      } = req;

      const notifications = await Notification.deleteNotifications(userId)

      notifications
      ? res.status(201).json(notifications)
      : res.status(500).send({ err: "Can't remove notifications" });
   

}

module.exports = deleteNotifications