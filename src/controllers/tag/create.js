const createTag = async (req, res) => {
  const {
    db: { Tag },
    body: { name, page_id },
  } = req;

  const tag = await Tag.create(name, page_id);
  console.log('yo');

  tag
    ? res.status(201).send(tag)
    : res.status(500).send({ err: "Can't create" });
};

module.exports = createTag;
