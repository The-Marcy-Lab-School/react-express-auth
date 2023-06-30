const searchPage = async (req, res) => {
  const {
    db: { Pages },
    query: { query },
  } = req;

  console.log("searchQuery", query);

  const page = await Pages.search(query);
  if (!page) return res.sendStatus(404);

  res.send(page);
};

module.exports = searchPage;
