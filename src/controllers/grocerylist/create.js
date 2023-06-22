const createGrocery = async (req, res) => {
  const {
    db: { Grocery_list },
    params: { userId },
    body: { list_name, nova_rate, nutri_score },
  } = req;
  // session.userId = user.id;
  const Grocery = await Grocery_list.create( list_name, nova_rate, nutri_score, userId);


  res.send( Grocery );
};

module.exports = createGrocery;
