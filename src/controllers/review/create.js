const createReview = async (req, res) => {
  const {
    db: { Reviews },
    body: { user_id, page_id, review_body, rating, staff_friendliness, wait_times, quality_of_care },
  } = req;
  console.log("controllers", req.body);

  const review = await Reviews.create(user_id, page_id, review_body, rating, staff_friendliness, wait_times, quality_of_care);
  res.send(review);
};

module.exports = createReview;
