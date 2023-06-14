const createReview = async (req, res) => {
    const {
        session,
        db: { Review },
        body: { user_id, ethnicity, age, gender, review_body, ratings },
    } = req;

    // TODO: check if username is taken, what should you return?
    const review = await Review.create(user_id, ethnicity, age, gender, review_body, ratings);
    res.send(review);
};

module.exports = createReview;
