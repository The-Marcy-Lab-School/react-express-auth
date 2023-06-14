const listGrocery = async (req, res) => {
  const { Grocery_list } = req.db;
  const grocery = await Grocery_list.list();
  res.send(grocery);
};

module.exports = listGrocery;