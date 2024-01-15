const createPage = async (req, res) => {
  const {
    db: { Page },
    body: { title, content, user_id },
  } = req;

  const pageID = await Page.create(title, content, user_id);
  console.log('yo');

  pageID
    ? res.status(201).json(pageID)
    : res.status(500).send({ err: "Can't create" });
};

module.exports = createPage;
