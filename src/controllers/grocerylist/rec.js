const rec = async (req, res) => {
    const {
      db: { Grocery_list },
      params: { id },
    } = req
    const grocery = await Grocery_list.rec(id);
    res.send(grocery);
  };
  
  module.exports = rec;