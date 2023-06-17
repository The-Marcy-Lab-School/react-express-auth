const showReview = async (req, res) => {
    const {
      db: { Reviews },
      params: { id },
    } = req;
  
    const review = await Reviews.find(id);
    if (!review) return res.sendStatus(404);
  
    res.send(review);
  };
  
  module.exports = showReview;
  