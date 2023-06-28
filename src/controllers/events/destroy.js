const deleteEvent = async (req, res) => {
    const {
        session,
        db: { Events },
        body: { event_id }
    } = req
    console.log("Event id delete: "+event_id)
    const user = await Events.delete(event_id);
    res.send(user);
}

module.exports = deleteEvent; 
