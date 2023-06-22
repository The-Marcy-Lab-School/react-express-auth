const listItem = async (req, res) => {
    const { Items } = req.db;
    const item = await Items.list();
    res.send(item);
  };
  
  module.exports = listItem;