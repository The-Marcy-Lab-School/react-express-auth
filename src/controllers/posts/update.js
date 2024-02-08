const updatePost = async (req, res) => {
  const {
    db: { Post },
    params: { id },
    body: { title },
  } = req;

  const updatedPost = await Post.update(title, id);
  res.json(updatedPost);
};
module.exports = updatePost;
