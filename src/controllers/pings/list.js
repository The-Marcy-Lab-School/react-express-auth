const { isAuthorized } = require('../../utils/auth-utils')

const listPings = async (req, res) => {
    const {
        session,
        db : { Ping }
    } = req

    if(!isAuthorized(session.userId, session)) return res.sendStatus(403)

    const pings = await Ping.list()

    if(!pings) return res.sendStatus(404)

    return res.send(pings)
}

module.exports = listPings