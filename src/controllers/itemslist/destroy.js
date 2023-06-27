const destroy = async (req, res) => {
    const {
      db: { Items },
      params: { id },
    } = req
    const result = await Items.destroy(id);
  
    res.sendStatus(result ? 204 : 404);
  };
  
  module.exports = destroy;
  