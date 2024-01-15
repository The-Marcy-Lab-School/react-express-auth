const listPages = async (req, res) => {
  const {
    db: { Page }, // this req.db.User property is put here by the addModelsToRequest middleware
  } = req;

  console.log('hiiiii');
  console.log('yo');

  const pages = await Page.list();
  res.send(pages);
};

module.exports = listPages;
