const create = async (req, res) => {
    const {
        db: { Notification },
        body: {  event_id, recipient_id, attendee_id, text },
      } = req;
    
      const notificationId = await Notification.create(event_id, recipient_id, attendee_id, text);
      console.log('yo');
    
      notificationId
        ? res.status(201).json(notificationId)
        : res.status(500).send({ err: "Can't create" });
}

module.exports = create