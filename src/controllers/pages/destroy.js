const deletePage = async (req, res) => {
    const { 
        db: { Pages }, 
        params: { id } } = req;
    const result = await Pages.delete(Number(id));
    res.status(result ? 204 : 404).send(result);
  };
  
  module.exports = deletePage;