const deleteItem = async (req, res) => {
  const {
    db: { Grocery_list },
    params: { grocerylist_id, item_id },
  } = req

  const result = await Grocery_list.deleteItem(grocerylist_id, item_id);
  res.sendStatus(result ? 204 : 404);


};



module.exports = deleteItem;
