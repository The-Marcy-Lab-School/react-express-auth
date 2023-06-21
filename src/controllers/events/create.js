const createEvent = async (req, res) => {
    const {
        session,
        db: { Events },
        body: {img_url, description, date, time, header, location}
    } = req
    const user_id = session.userId;
    const event = await Events.create(user_id, img_url, description, date, time, header, location);
    res.send(event);
}
module.exports = createEvent;