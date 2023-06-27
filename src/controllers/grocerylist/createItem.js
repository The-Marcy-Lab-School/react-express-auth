// module.exports = createItems;
const createItems = async (req, res) => {
  const {
    db: { Grocery_list },
    params: { id },
  } = req;
  
  const itemData = req.body;
  
  const groceryList = await Grocery_list.addItem(id, itemData);

  if (groceryList !== null) {
    // Item added successfully
    // Calculate and update the nova_score for the grocery list
    const updatedNovaScore = await Grocery_list.updateNovaScore(id);

    if (updatedNovaScore !== null) {
      groceryList.nova_score = updatedNovaScore;
    } else {
      // Unable to update the nova score
      // Handle the error or show an appropriate message
    }
  } else {
    // Unable to add the item
    // Handle the error or show an appropriate message
  }

  res.send(groceryList);
};

module.exports = createItems;
