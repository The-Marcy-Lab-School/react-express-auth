const listGrocery = async (req, res) => {
  const {
    db: { Grocery_list },
    params: { id },
  } = req
  const grocery = await Grocery_list.list(Number(id));
  res.send(grocery);
};

module.exports = listGrocery;