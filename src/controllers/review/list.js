const listReviews = async (req, res) => {
    const { Review } = req.db;
    const reviews = await Review.list();
    res.send(reviews);
  };
  
module.exports = listReviews;