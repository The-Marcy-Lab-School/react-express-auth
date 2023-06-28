const { isAuthorized } = require('../../utils/auth-utils')

const createPing = async (req, res) => {
    const {
        session,
        db : { Ping },
        params : { id },
        body: { recipientId }

    } = req

    if (!isAuthorized(id, session)) return res.sendStatus(403);

    const ping = await Ping.create(session.userId, recipientId)

    if(!ping) return res.sendStatus(404)
    return res.sendStatus(202)

}

module.exports = createPing