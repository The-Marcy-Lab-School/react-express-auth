const destroyAll = async (req, res) => {
    const { Grocery_list } = req.db;
    const result = await Grocery_list.destroyAll();
  
    res.sendStatus(result ? 204 : 404);
  };
  
  module.exports = destroyAll;