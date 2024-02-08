const getNotifications = async (req, res) => {
    const {
        db: { Notification },
        params: { userId},
      } = req;

      const notifications = await Notification.readNotifications(userId)

      notifications
      ? res.status(201).json(notifications)
      : res.status(500).send({ err: "Can't recieve notications" });

}

module.exports = getNotifications