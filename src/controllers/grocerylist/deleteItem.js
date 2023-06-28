const deleteItem = async (req, res) => {
  const {
    db: { Grocery_list },
    params: { grocerylist_id, item_id },
  } = req

  const result = await Grocery_list.deleteItem(grocerylist_id, item_id);
  const updatedNovaScore = await Grocery_list.updateNovaScore(grocerylist_id);

      result.nova_score = updatedNovaScore;

  res.sendStatus(result ? 204 : 404);


};



module.exports = deleteItem;
