const Feed = require('../models/Feed');

exports.loadFeed = async (req, res) => {
    const { page = 1, limit = 10 } = req.query

    try {
        const feedData = await Feed.getFeed(limit, page)
        return res.status(200).send(feedData)
    } catch(error) {
        return res.status(404).send({ error: error.message })
    }
}
