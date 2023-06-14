const createGrocery = async (req, res) => {
  const {
    db: { Grocery_list },
    body: { nova_rate, nutri_score },
  } = req;

  const Grocery = await Grocery_list.create( nova_rate, nutri_score);
  // session.userId = user.id;

  res.send( Grocery );
};

module.exports = createGrocery;
