const listTags = async (req, res) => {
  const {
    db: { Tag }, // this req.db.User property is put here by the addModelsToRequest middleware
  } = req;

  console.log('tag');

  const tags = await Tag.list();
  res.send(tags);
};

module.exports = listTags;
