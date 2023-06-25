const deleteItem = async (req, res) => {
  const {
    db: { GroceryList, Item },
    params: { grocerylist_Id, item_Id }
  } = req;

  const groceryList = await GroceryList.find(grocerylist_Id);
  if (!groceryList) return res.sendStatus(404);

  const item = await Item.find(item_Id);
  if (!item) return res.sendStatus(404);

  await groceryList.items().detach(item.id); // Remove the item from the grocery list

  res.send("Item deleted from the grocery list successfully.");
};

module.exports = deleteItem;