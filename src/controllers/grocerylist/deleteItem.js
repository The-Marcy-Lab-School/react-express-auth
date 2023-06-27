const deleteItem = async (req, res) => {
    const {
      db: { Grocery_list},
      params: { grocerylist_id, item_id },
    } = req
  
    
  
    const result = await Grocery_list.deleteItem(grocerylist_id, item_id);
    res.sendStatus(result ? 204 : 404);
     
  
 };

 
  
  module.exports = deleteItem;
  //   const groceryList = await Grocery_List.find(grocerylist_Id);
  //   if (!groceryList) return res.sendStatus(404);
  
  //   const item = await Items.find(item_Id);
  //   if (!item) return res.sendStatus(404);
  
  //   await groceryList.items().detach(item.id); // Remove the item from the grocery list
  
  //   res.send("Item deleted from the grocery list successfully.");
  //