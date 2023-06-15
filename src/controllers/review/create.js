const createReview = async (req, res) => {
    const {
        db: { Reviews },
        body: {user_id, review_body, rating },
    } = req;

    // TODO: check if username is taken, what should you return?
    const review = await Reviews.create(user_id, review_body, rating);
    res.send(review);
};

module.exports = createReview;
