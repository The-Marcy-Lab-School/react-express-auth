const deleteANotifications = async (req, res) => {
    const {
        db: { Notification },
        body: {userId, attendeeId},
      } = req;

      console.log(userId,attendeeId)
      const notifications = await Notification.removeANotification(userId, attendeeId)

      notifications
      ? res.status(201).json(notifications)
      : res.status(500).send({ err: "Can't remove notifications" });
   

}

module.exports = deleteANotifications