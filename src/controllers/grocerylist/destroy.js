const destroy = async (req, res) => {
    const {
      db: { Grocery_list },
      params: { id },
    } = req
    const result = await Grocery_list.destroy(id);
  
    res.sendStatus(result ? 204 : 404);
  };
  
  module.exports = destroy;