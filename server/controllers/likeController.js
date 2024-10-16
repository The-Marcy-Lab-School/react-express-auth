const { isAuthorized } = require('../utils/auth-utils');
const Like = require('../models/Like');

exports.createLike = async (req, res) => {
    const { post_id, user_id } = req.body
    const { session } = req

    if (!isAuthorized(id, session)) return res.sendStatus(403);

    await Like.addLike(post_id, user_id)
    return res.sendStatus(201)
}
