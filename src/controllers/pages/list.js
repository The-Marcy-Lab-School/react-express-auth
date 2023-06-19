const listPages = async (req, res) => {
    const { Pages } = req.db;
    const pages = await Pages.list();
    res.send(pages);
  };
  
module.exports = listPages;