const createGrocery = async (req, res) => {
  const {
    db: { Grocery_list },
    body: { list_name, nova_rate, nutri_score },
  } = req;

  const Grocery = await Grocery_list.create( list_name, nova_rate, nutri_score);
  

  res.send( Grocery );
};

module.exports = createGrocery;
