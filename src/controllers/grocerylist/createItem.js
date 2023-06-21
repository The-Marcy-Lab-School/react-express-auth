const createItems = async (req, res) => {
  const {
    db: { Grocery_list },
    params: { id },
  } = req;
  const itemData = req.body
  const Grocery = await Grocery_list.addItem( id, itemData );
  // session.userId = user.id;

  res.send( Grocery );
};

module.exports = createItems;
