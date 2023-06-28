
const updatePing =  async (req, res) => {
    const {
        session,
        params : {id : pingId},
        db : { Ping },

    } = req;

    const ping = await Ping.update(pingId)

    if(!ping) res.sendStatus(404)

    return res.send(ping).status(200).end()

}

module.exports = updatePing