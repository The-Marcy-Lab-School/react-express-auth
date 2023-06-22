const { isAuthorized } = require('../../utils/auth-utils');

const updateReview = async (req, res) => {
  const {
    db: { Reviews },
    params: { id },
    body: { review_body, rating }
  } = req;

  // if (!isAuthorized(id, session)) return res.sendStatus(403);

  const review = await Reviews.find(id);
  if (!review) return res.sendStatus(404);

  const updatedReview = await review.update(review_body, rating);
  res.send(updatedReview);
  if(!updateReview) return res.sendStatus(404);
  res.send(updatedReview)
};

module.exports = updateReview;
