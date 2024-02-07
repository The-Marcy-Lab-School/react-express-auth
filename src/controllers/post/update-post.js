const updatePost = async (req, res) => {
  const {
    db: { Post }, 
    body: { title, description, location, image }, 
    params: { id }, 
  } = req;

  const post = await Post.find(id);
  if (!post) return res.sendStatus(404);

  const updatedPost = await Post.updatePost(title, description, location, image, id);
  res.send(updatedPost);
};

module.exports = updatePost;