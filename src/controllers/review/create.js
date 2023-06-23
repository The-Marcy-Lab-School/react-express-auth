const createReview = async (req, res) => {
  const {
    db: { Reviews },
    body: { user_id, page_id, review_body, rating },
  } = req;
  console.log("controllers", req.body);

  const review = await Reviews.create(user_id, page_id, review_body, rating);
  res.send(review);
};

module.exports = createReview;
