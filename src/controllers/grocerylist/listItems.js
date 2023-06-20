const listItems = async (req, res) => {
  const {
    db: { Grocery_list },
    params: { id },
  } = req
  const grocery = await Grocery_list.findItemByGroceryListId(Number(id));
  res.send(grocery);
};

module.exports = listItems;