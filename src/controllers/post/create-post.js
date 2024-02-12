const createPost = async (req, res) => {
    const {
        db: { Post },
        params: { user_id }, 
        body: { title, description, location, image, start_time, end_time, tags}, 
    } = req;

    const post = await Post.createPost(user_id, title, description, location, image, start_time, end_time, tags);

    post ? res.status(201).send(post) : res.status(500).send('Internal Server Error');
  
};

module.exports = createPost;
