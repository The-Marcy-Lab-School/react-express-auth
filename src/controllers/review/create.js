const createReview = async (req, res) => {
    const {
        db: { Reviews },
        body: { user_id, review_body, rating },
    } = req;

    const review = await Reviews.create(user_id, review_body, rating);
    res.send(review);
};

module.exports = createReview;
