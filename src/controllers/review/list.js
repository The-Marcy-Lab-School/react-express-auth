const listReviews = async (req, res) => {
    const { Reviews } = req.db;
    const reviews = await Reviews.list();
    res.send(reviews);
  };
  
module.exports = listReviews;