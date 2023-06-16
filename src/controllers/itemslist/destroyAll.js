const destroyAll = async (req, res) => {
    const { Items } = req.db;
    const result = await Items.destroyAll();
  
    res.sendStatus(result ? 204 : 404);
  };
  
  module.exports = destroyAll;