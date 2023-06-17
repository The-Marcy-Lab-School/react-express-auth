import React, { useState } from 'react';

const ReviewModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleRatingChange = (e) => {
    setRating(parseInt(e.target.value));
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the rating and review data
    console.log('Rating:', rating);
    console.log('Review:', review);

    setRating(0);
    setReview('');
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Write A Review</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Write Review</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="rating">Rating (out of 5):</label>
                <input
                  type="number"
                  id="rating"
                  min="0"
                  max="5"
                  value={rating}
                  onChange={handleRatingChange}
                />
              </div>
              <div>
                <label htmlFor="review">Review:</label>
                <textarea
                  id="review"
                  value={review}
                  onChange={handleReviewChange}
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewModal;
