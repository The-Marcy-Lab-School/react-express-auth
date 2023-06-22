const deleteReview = async (req, res) => {
    const { 
        db: {Reviews}, 
        params: { id } } = req;
    const result = await Reviews.delete(Number(id));
    res.status(result ? 204 : 404).send(result);
  };
  
  module.exports = deleteReview;