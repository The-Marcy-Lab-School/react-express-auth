const Like = require('../models/Like');
const Post = require('../models/Post');

exports.createLike = async (req, res) => {
    const { userId, post_id } = this.getUserAndPostIds(req)

    try {
        const post = await Post.findPost(post_id)
        if (!post) return res.status(404).send(`Post with Id: ${post_id} does not exist.`)
        
        const existingLike = await Like.checkLike(post_id, userId)
        if (existingLike) return res.status(409).send("Like already exists.")

        const newLike = await Like.addLike(post_id, userId)
        return res.status(201).send(newLike)
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
}

exports.removeLike = async (req, res) => {
    const { userId, post_id } = this.getUserAndPostIds(req)

    try {
        const existingLike = await Like.checkLike(post_id, userId)
        if (!existingLike) return res.status(409).send("Like does not exist")
        
        await Like.removeLike(post_id, userId);
        return res.sendStatus(204)
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
}

exports.getUserAndPostIds = (req) => {
    const { userId } = req.session
    const { post_id } = req.params

    return { userId, post_id }
}




