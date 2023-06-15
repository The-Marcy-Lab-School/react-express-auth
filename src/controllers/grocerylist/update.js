const updateGrocery = async (req, res) => {
  const {
    // session
    db: { Grocery_list },
    params: { id },
    body: { nova_rate, nutri_score }
  } = req;

  // if (!isAuthorized(id, session)) return res.sendStatus(403);
  const grocery = await Grocery_list.find(id);
  if (!grocery) return res.sendStatus(404);

  const updatedGrocery = await Grocery_list.update(id, nova_rate, nutri_score);
  res.send(updatedGrocery);
};

module.exports = updateGrocery;

