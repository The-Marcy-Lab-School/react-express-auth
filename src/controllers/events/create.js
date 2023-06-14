const createEvent = async (req, res) => {
    const {
        session,
        db: { Events },
        body: {user_id, img_url, description, date, time, header}
    } = req
    // const user_id = session.user_id;
    console.log(user_id, img_url, description, date, time, header)
    const event = await Events.create(user_id, img_url, description, date, time, header);
    res.send(event);
}

module.exports = createEvent;    