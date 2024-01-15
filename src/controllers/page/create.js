const createPage = async (req, res) => {
  const {
    db: { Page },
    body: { title, content, user_id },
  } = req;

  const page = await Page.create(title, content, user_id);
  console.log('yo');

  page
    ? res.status(201).send(page)
    : res.status(500).send({ err: "Can't create" });
};

module.exports = createPage;
