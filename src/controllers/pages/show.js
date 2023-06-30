const showPage = async (req, res) => {
  const {
    db: { Pages },
    params: { id },
  } = req;

  console.log("show controller", id);

  const page = await Pages.find(id);
  if (!page) return res.sendStatus(404);

  res.send(page);
};

module.exports = showPage;
