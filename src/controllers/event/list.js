const listEvents = async (req, res) => {
    const {
        session: {userId},
        db : {Event},
    } = req;

    const events =  await Event.list()
    console.log(events)

    if(!events.length) return res.sendStatus(404)


    return res.send(events)

}

module.exports = listEvents