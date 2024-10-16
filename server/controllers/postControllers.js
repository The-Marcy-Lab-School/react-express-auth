const { isAuthorized } = require('../utils/auth-utils');
const Post = require('../models/Post');

exports.createPost = async (req, res) => {
    const { userId, title, body } = this.getUserAndPostData(req)
    console.log(userId, title, body)

    try {
        const post = await Post.createPost(title, body, userId);
        res.status(201).send(post);
    } catch(error){
        return res.status(500).send('Error creating post');
    }
};

exports.deletePost = async (req, res) => {
    const { userId, post_id } = this.getUserAndPostData(req)
    
    console.log(userId,post_id)
   
   try{
        const foundPost = await Post.findPost(post_id);
        

        if(!foundPost) return res.status(401).send("Post does not exsit");
        if(foundPost.user_id !== userId) return res.status(401).send(`User ${userId} is not authorized to delete this post`)

        await Post.deletePost(post_id);
        return res.sendStatus(204)
    }catch(error){
        res.status(500).send({ error: error.message })
    }
}


exports.getUserAndPostData = (req) => {
  const { userId } = req.session
  const { post_id } = req.params
  const { title, body } = req.body

  return { userId, post_id, title, body }
}